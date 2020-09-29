import React from 'react';
import { Link } from 'react-router-dom';
import BannerBG from '../components/BannerBG';
import Banner from '../components/Banner';
import TentsContainer from '../components/TentsContainer';

const Rooms = () => {
    return (
        <div>
            <BannerBG bannerBG="tentsBannerBG">
                <Banner title="Tents" subtitle="Last chance up to 70% off **">
                    <Link to="/" className="btn-primary">Return to Homepage</Link>
                </Banner>
            </BannerBG>
            <TentsContainer />
        </div>
    )
}

export default Rooms;
