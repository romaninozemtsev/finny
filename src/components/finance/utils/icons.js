import React from 'react';
import {SiAmazon, SiInstacart, SiUbereats, SiApple} from 'react-icons/si';

export default function getMerchantIcon(merchant) {
    const className = "w-8 h-8 object-cover rounded-full";

    if (merchant === 'amazon') {
        return <SiAmazon />
    } else if (merchant === 'Instacart') {
        return <SiInstacart color="orange"/>
    } else if (merchant === "ikea") {
        return <img className={className}  src="/logos/Ikea_logo.svg" />;
    } else if (merchant === "uber eats") {
        return <SiUbereats />
    } else if (merchant === "philz coffee") {
        return <img className={className}  src="/logos/philz.ico" />;
    } else if (merchant === "apple") {
        return <SiApple />
    } else if (merchant === "target") {
        return <img className={className}  src="/logos/target_logo.svg" />;
    } else if (merchant === "nob hill") {
        return <img  className={className}  src="/logos/raleys_logo.png" />;
    }


    return <span />
}