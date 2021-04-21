import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';

export default function TxTable({data}) {
    return <div>
        <h4>
            All transactions
        </h4>
        <Table striped bordered hover>
        <thead><tr>
                <th>
                    description
                </th>
                <th>
                    merchant
                </th>
                <th>
                    category
                </th>
                <th>
                    date
                </th>
                <th>
                    amount
                </th>
            </tr>
            </thead><tbody>
        {data.map(x => <tr>
            <td>{x.description}</td>
            <td>{x.merchant}</td>
            <td className={x.category === 'uncategorized'?'red': ''}>{x.category}</td>
            <td>{x.date.toDateString()}</td>
            <td>${x.amount.toFixed(2)}</td>
        </tr>)}
        </tbody>
    </Table>
    </div>
}