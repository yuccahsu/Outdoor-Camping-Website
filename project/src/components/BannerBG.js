import React from 'react';
import './BannerPart.css';

function BannerBG({ children, bannerBG }) {
    return (
        <header className={bannerBG}>
            {children}
        </header>
    )
};

BannerBG.defaultProps = {
    bannerBG: "defaultBannerBG"
};

export default BannerBG;
