import React, {useEffect, useState, useMemo} from 'react'

import { HorizontalBar } from 'react-chartjs-2';
import categories from './configs/categories';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
import { Spectral11 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer';
import 'chartjs-plugin-datalabels';


function buildCategoryTree() {
    const cats = {};
    let result = ``;
    categories.forEach(elem => {
        result += `${elem.category} -> ${elem.parent || 'root'}\n`;

        if (cats[elem.category]) {
            cats[elem.category].parent = elem.parent;
        } else {
            cats[elem.category] = elem;
            elem.children = [];
        }
        if (cats[elem.parent]) {
            cats[elem.parent].children.push(cats[elem.category]);
        } else {
            cats[elem.parent] = {
                category: elem.parent,
                children: [elem],
            }
        }
    });
    return cats;
}

const options = {
    plugins: {
        colorschemes: {
            scheme: Spectral11
        },
        datalabels: false,
    },
};

const cats = buildCategoryTree();


function getRootCategory(cat) {
    if (cat === null) {
        return "uncategorized";
    }
    if (cat === '') {
        return cat;
    }
    if (!cats[cat]) {
        console.log(`category ${cat} doesn't exist in topology`)
        return '';
    }
    const parent = cats[cat].parent;
    if (parent === '') {
        return cat;
    }
    return getRootCategory(parent);
}

function addRootElem(data) {
    data.forEach(x => {
        x.rootCategory = getRootCategory(x.category);
    });
}

function groupByCategory(data) {
    const result = {};
    data.forEach(x => {
        if (!result[x.rootCategory]) {
            result[x.rootCategory] = {
                amount: 0,
                subCategories: {}
            };
        }
        result[x.rootCategory].amount += Math.abs(x.amount);
        if (!result[x.rootCategory].subCategories[x.category]) {
            result[x.rootCategory].subCategories[x.category] = 0;
        }
        result[x.rootCategory].subCategories[x.category] += Math.abs(x.amount);
    });
    return result;
}

export default class Categories extends React.Component {
    constructor(props) {
        super(props)
        const { data } = props;
        this.onElementClick = this.onElementClick.bind(this);
        this.debits = data.filter(x => x.type === 'debit');
        addRootElem(this.debits);
        const groupedData = groupByCategory(this.debits);
        this.labels = [];
        this.values = [];
        this.values2 = [];
        this.labels2 = [];
        const sortedByValue = Object.entries(groupedData).sort((a,b) => {
            return b[1].amount - a[1].amount;
        });
        for (const [key, value] of sortedByValue) {
            this.labels.push(key);
            this.values.push(value.amount.toFixed(2));
            for (const [k, v] of Object.entries(value.subCategories)) {
                this.values2.push(v);
                this.labels2.push(k);
            }
        }
        // console.log(this.values, this.labels);
        // console.log(this.values2, this.labels2);
        this.dataFull = {
            datasets: [{
                data: this.values,
                label: 'spent per category',
                labels: this.labels
            },
            // {
            //     data: this.values2,
            //     label: 'Dataset 2',
            //     labels: this.labels2
            // }
            ],
            labels: this.labels//.concat(this.labels2)
        };
        this.state = {
            selected_txn: []
        }
    }

    onElementClick(elems) {
        if (elems && elems.length > 0) {
            const label = this.labels[elems[0]._index];
            // const selected_txn = this.debits.filter(x => x.rootCategory === label);
            // this.setState({selected_txn});
            this.props.onRootCategorySelected(label);
        }
    }
 
    render() {
        return <div>
            <h4>Spending categories</h4>
        <HorizontalBar data={this.dataFull} options={options} onElementsClick={this.onElementClick}/>
        {/* <TxTable data={this.state.selected_txn}/> */}
        </div>
    }
}