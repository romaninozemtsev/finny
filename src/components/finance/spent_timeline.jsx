import React from 'react'
import { Bar } from 'react-chartjs-2'

const options = {
  scales: {
    xAxes: [{
        type: 'time',
        time: {
            unit: 'day'
        }
    }]
  },
  plugins: {
      datalabels: false
  }
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

/**
 * 
 * @param {Array} array 
 * @returns {{debits: Array, credits: Array}}
 */
function sumDebits(array) {
    const debits = [];
    const credits = [];
    let currentElem = null;
    let key = null;
    array.forEach(x => {
        let newKey = formatDate(x.date);
        if (newKey !== key) {
            if (currentElem != null) {
                debits.push({
                    x: currentElem.x,
                    y: currentElem.debits.toFixed(2),
                });
                credits.push({
                    x: currentElem.x,
                    y: currentElem.credits.toFixed(2),
                });
            }
            key = newKey;
            currentElem = {
                x: key, 
                debits: 0,
                credits: 0,
            };
        }
        if (x.type === 'debit') {
            currentElem.debits += x.amount;
        } else {
            currentElem.credits += x.amount;
        }
        
    });
    return {debits, credits};
}

export default class Timeline extends React.Component{

    constructor(props) {
        super(props)
        this.onBarClick = this.onBarClick.bind(this);

        const sortedTxData = sortByKey(this.props.data, 'date').filter(x => x.category !== 'pay_card');
        const {debits, credits} = sumDebits(sortedTxData); 
        const labels = debits.map(x => x.x);
        const data = {
            labels: labels,
            datasets: [{
                label: 'spent',
                data: debits, 
                borderWidth: 1,
                backgroundColor: 'red',
            }, {
                label: 'earned',
                data: credits, 
                borderWidth: 1,
                backgroundColor: 'green',
            }],
        }
        this.state = {
            debits, credits, tx_data: this.props.data,
            data,
            selected_txn: [],
        };
    }

    /**
     * 
     * @param {Array.<Object>}elems 
     */
    onBarClick(elems) {
        console.log(elems);

        if (elems && elems.length > 0) {
            const tx_date = this.state.debits[elems[0]._index].x;
            this.props.onDaySelected(tx_date);
            const selected_txn = this.state.tx_data.filter(x => {
                return formatDate(x.date) === tx_date
            });
            this.setState({selected_txn});
        }
    }

    render() {
        return <>
            <Bar data={this.state.data} options={options} onElementsClick={this.onBarClick} />
        </>
    }
}
