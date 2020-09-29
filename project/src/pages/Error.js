import React from 'react';
import { Link } from 'react-router-dom';
import BannerBG from '../components/BannerBG';
import Banner from '../components/Banner';

const Error = () => {
    return (
        <div>
            <BannerBG>
                <Banner title="Page not found" subtitle="Return to the home page">
                    <Link to="/" className="btn-primary">Home</Link>
                </Banner>
            </BannerBG>
        </div>
    )
}

export default Error;
