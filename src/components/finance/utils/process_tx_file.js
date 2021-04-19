import columnsRename from '../configs/columns'; 
import merchants from '../configs/merchant_matchers';
import merchantList from '../configs/merchants';
import categoryMatchers from '../configs/category_matchers';
import Papa from 'papaparse';
import CryptoJS from 'crypto-js';


const AccountType = Object.freeze({
    CREDIT_CARD:   'credit_card',
    ACCOUNT:  'account',
});

const Banks = Object.freeze({
    BANK_OF_AMERICA: 'BofA',
    CHASE: 'Chase'
});


function remapColumns(data) {
    for (const [oldCol, newCol] of Object.entries(columnsRename)) {
        if (oldCol in data) {
            data[newCol] = data[oldCol];
            delete data[oldCol];
        }
    }
}

/**
 * remove leading and trailing spaces; convert all multispaces to single one.
 * so " bagel   shop " becomes "bagel shop"
 * @param {String} value 
 */
function normalizeSpacing(value) {
    return value.toLowerCase().replace(/\s+/ig, ' ').trim();
}

/**
 * generate uniq ID for a transaction so we can dedup
 * @param {{description: String, amount: string, date: string}} data 
 */
function generateId(data) {
    if (!!data.ref_num) {
        data.id = data.ref_num;
    } else {
        const toHash = `${data.description}${data.amount}${data.date}`;
        const hash = CryptoJS.MD5(toHash).toString();
        data.id = hash;
    }
}

/**
 * @param {{description: String, amount: string, date: string}} data 
 */
function preProcess(data) {
    remapColumns(data);
    generateId(data);
    data.date = new Date(data.date);
    data.amount = parseFloat(data.amount);
    data.description = normalizeSpacing(data.description);
    if (!data.address) {
        data.address = '###'
    } else {
        data.address = normalizeSpacing(data.address);
    }
    if (data.amount > 0) {
        data.type = 'credit';
    } 
    if (data.amount < 0) {
        data.type = 'debit';
    }
    data.description = cleanDescription(data);
    const moreValues = parseDescription(data.description)

    for (const [k, v] of Object.entries(moreValues)) {
        data[k] = v;
    }
    return data;
}


/**
 * 
 * @param {String} description 
 */
function findMerchant(description) {
    for (let i=0; i < merchants.length; i++) {
        const matcher = merchants[i];

        const {operation, expression, merchant} = matcher;
        if (operation  === 'exact') {
            if (description === expression) {
                return { merchant, extraValues: {} }
            } 
        } else if (operation === 'keyword') {
            const parts = description.split(/\s|\.|,|\n/g, description)
            if (parts.includes(expression)) {
                return { merchant, extraValues: {}}
            }
        } else if (operation === 'regex') {
            const re = new RegExp(expression);
            const match = description.match(re);
            if (!!match) {
                let extraValues = {};
                if (!!match.groups) {
                    extraValues = match.groups;
                }
                return {merchant, extraValues};
            }
        }
    }

    return {
        merchant: null,
        extraValues: {}
    }
}

/**
 * 
 * @param {String} description 
 */
function findCategory(description) {
    for (let i=0; i < categoryMatchers.length; i++) {
        const matcher = categoryMatchers[i];

        const {operation, expression, category} = matcher;
        if (operation  === 'exact') {
            if (description === expression) {
                return category;
            } 
        } else if (operation === 'keyword') {
            const parts = description.split(/\s|\.|,|\n/g, description)
            if (parts.includes(expression)) {
                return category;
            }
        } else if (operation === 'regex') {
            const re = new RegExp(expression);
            const match = description.match(re);
            if (!!match) {
                return category;
            }
        }
    }

    return 'uncategorized';
}

/**
 * 
 * @param {String} merchant 
 */
function findMerchantCategory(merchant) {
    const result = merchantList.find(x => x.merchant == merchant);
    return result?.category;
}

/**
 * 
 * @param {String} category 
 */
function findRootCategory(category) {
    return null;
    // def find_root_category(category):
    // parent = categories.loc[category]["parent"]
    // if parent:
    //     return find_root_category(parent)
    // else:
    //     return category
}


/**
 * 
 * @param {String} description 
 */
function parseDescription(description) {
    let {merchant, extraValues} = findMerchant(description)
    let category;
    if (!!merchant) {
        category = findMerchantCategory(merchant);
    }
    if (!category) {
        category = findCategory(description)
    }
    if (!category) {
        category = 'uncategorized';
    }
    let rootCategory = findRootCategory(category);
    return {
        merchant,
        category,
        rootCategory,
        ...extraValues
    }
}

/**
 * 
 * @param {{address:String, description:String}} data 
 */
function cleanDescription(data) {
    let {address, description} = data;
    console.log(description);
    let found;
    const paypalRegex1 = /orig co name:paypal co entry descr:inst xfer sec:web ind id:(?<desc>.*) orig id:.*?/i;
    const paypalRegex2 = /paypal inst xfer (?<desc>.*) web id: .*?/i;
    const paypalRegex3 = /(?<desc>.*) iat paypal .*? web id: .*?/i;
    const paypalRefund = /orig co name:paypal co entry descr:transfer sec:ppd orig id:paypalsd.*?/i;
    const paypalRefund2 = /paypal transfer ppd id: paypalsd.*?/i;
    if (description.startsWith('sq *')) {
        description = description.replace('sq *', '')
        data['processor'] = 'square';
    } else if (description.startsWith('tst* ')) {
        description = description.replace('tst* ', '')
        data['processor'] = 'toast';
    } else if (found = description.match(paypalRegex1) || description.match(paypalRegex2) || description.match(paypalRegex3)) {
        if (found.groups?.desc) {
            description = found?.groups?.desc;
        }
        data['processor'] = 'paypal';
    } else if (description.match(paypalRefund) || description.match(paypalRefund2)) {
        description = 'paypal refund';
        data['processor'] = 'paypal'
    }
    if (!address) {
        return description;
    }
    let address_without_spaces = address.replace(/\s+/g, '')
    let description_without_spaces = description.replace(/\s+/g, '')
    //console.log('0', description_without_spaces, address_without_spaces)
    if (description_without_spaces.endsWith(address_without_spaces)) {
        //console.log('0', description_without_spaces, address_without_spaces)
        // need to remove address from payee
        // possibilities are:
        // sunnyvale CA -> SunnyvaleCA
        // mountain view ca -> mountain viewca
        // sunnyvale ca -> sunnyvale ca
        if (description.endsWith(address)) {
            return description.replace(address, '').trim();
        }
        const k = address.lastIndexOf(' ');
        const address_without_last_space = address.slice(0, k)  + address.slice(k+1);
        //console.log("1", address, address_without_last_space, description.endsWith(address_without_last_space));
        if (description.endsWith(address_without_last_space)) {
            //console.log('2 replacing ', description, description.replace(address_without_last_space, ''));
            return description.replace(address_without_last_space, '').trim();
        }
    }
    return description;
}

function inferAccountInfo() {
    // start balance, end balance

    // credit card - total spent, total paid off.

}

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

/**
 * 
 * @param {Array[string]} fields 
 * @param {Object[string,string]} data 
 * @returns 
 */
function inferFileProps(fields, data) {
    const [f1, f2, f3, f4, f5, f6, f7] = fields;

    const dates = data.map(x => x.date).filter(isValidDate);
    console.log(dates);
    const minDate = Math.min(...dates);
    const maxDate = Math.max(...dates);

    let bank = "unknown";
    let file_type = "unknown";
    console.log("fields", fields);

    if (f1 === "Date" && f2 === "Description" && f3 === "Amount" && f4 === "Running Bal.") {
        bank = Banks.BANK_OF_AMERICA;
        file_type = AccountType.ACCOUNT;
    } else if (f1 === "Details" && f2 === "Posting Date" && f3 === "Description" && f4 === "Amount" && f5 === "Type" && f6 === "Balance" && f7 === "Check or Slip #") {
        bank = Banks.CHASE;
        file_type = AccountType.ACCOUNT;
    } else if (f1 === "Transaction Date" && f2 === "Post Date" && f3 === "Description" && f4 === "Category" && f5 === "Type" && f6 === "Amount" && f7 === "Memo") {
        bank = Banks.CHASE;
        file_type = AccountType.CREDIT_CARD;
    } else if (f1 === "Posted Date" && f2 === "Reference Number"  && f3 === "Payee" && f4 === "Address" && f5 ==="Amount") {
        bank = Banks.BANK_OF_AMERICA;
        file_type = AccountType.CREDIT_CARD;
    }

    let totalSpent = 0;
    if (file_type === AccountType.CREDIT_CARD) {
        console.log(data, data.map(x => x.amount));
        totalSpent = data.filter(x => isValidDate(x.date)).filter(x => x.category !== 'pay_card').map(x => x.amount).reduce((a, b) => a + b, 0);
        console.log("totalSpent", totalSpent);
    }
    
    // TODO use icons
    // SiChase
    return {bank, file_type, minDate, maxDate, totalSpent};
}

export function processDropFile(file) {
    const name = file.name;
    
    return new Promise(function(resolve, reject){
        var results = []
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
            let csvDoc = reader.result
            let lines = csvDoc.split('\n');
            
            // parsing BofA checking format.
            if (lines[1].includes('Beginning balance')) {
                //console.log(lines.slice(6));
                lines = lines.slice(6);
            }
            lines = lines.filter(x => !!x);
            csvDoc = lines.join("\n");
            const results = Papa.parse(csvDoc, {header: true});
            const processedData = results.data.map(preProcess);
            const fileProps = inferFileProps(results.meta.fields, processedData);
            
            resolve({name, results: processedData, ...fileProps});
        }
        reader.readAsText(file, 'utf-8');
        
    });
}

export function processDropFiles(files) {
    return Promise.all(files.map(file => processDropFile(file)));
}
