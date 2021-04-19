import React from 'react';

import {formatDate, formatAmount} from './utils/formatters';
import { Chase, Bankofamerica } from '@icons-pack/react-simple-icons';
import { VscCreditCard } from "react-icons/vsc";

export default function Files({fullData}) {
    // TODO: compute that once, not on each render.
    /**
     * f {name, results, bank, file_type, minDate, maxDate}
     */
    const computeName = function(f) {
        return <>  </>;
    } 

    const getIcon = function(f) {
        if (f.bank === "Chase") {
            return <Chase color="blue" />
        } else if (f.bank === "BofA") {
            return <Bankofamerica color="red" />
        } else {
            return <VscCreditCard />
        }
    }

    return <ul>
        {fullData.map(f => <li>
            <div class="flex flex-1 flex-column">
                <div class="flex flex-row">
                    {getIcon(f)} <div> {f.bank}</div>  <div> {f.file_type}</div> <div> {formatAmount(f.totalSpent)}</div>
                </div>
                <div class="flex flex-row">
                    {formatDate(f.minDate)} - {formatDate(f.maxDate)}
                </div>
            </div>
             {computeName(f)}
        </li>)}
    </ul>
}