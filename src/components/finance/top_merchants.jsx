import React from 'react';
import Table from 'react-bootstrap/Table';
import getMerchantIcon from './utils/icons';
import {RiSearchLine} from 'react-icons/ri';

var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

export default function TopMerchantsTable({data, onMerchantSelected}) {
    // take only debits
    const debits = data.filter(x => x.type === 'debit');
    const grouped = groupBy(debits, 'merchant');
    const groupedAsArray = [];
    for (const [merchant, txn] of Object.entries(grouped)) {
        let amount = 0;
        let cnt = 0;
        txn.forEach(tx => {
            amount += Math.abs(tx.amount)
            cnt += 1;
        });
        groupedAsArray.push({merchant, amount, cnt});
    }
    // sorting descending
    groupedAsArray.sort((x, y) =>  y.amount - x.amount);

        return <div>
            <h4>Top merchants</h4>
            <Table striped bordered hover>
        <thead><tr>
                <th>
                    merchant
                </th>
                <th>
                    txn #
                </th>
                <th>
                    amount
                </th>
            </tr>
            </thead><tbody>
        {groupedAsArray.map(x => <tr>
            <td>
                <div className="flex flex-1 flex-row">
                {getMerchantIcon(x.merchant)}
                <div>{x.merchant}</div>
                <RiSearchLine onClick={y=>onMerchantSelected(x.merchant)}/>
                </div>
                
            </td>
            <td>{x.cnt}</td>
            <td>${x.amount.toFixed()}</td>
        </tr>)}
        </tbody>
    </Table>
    </div>
}