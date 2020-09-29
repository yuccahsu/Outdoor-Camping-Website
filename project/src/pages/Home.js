import React from 'react';
import { Link } from 'react-router-dom';
import BannerBG from '../components/BannerBG';
import Banner from '../components/Banner';
import HotDeals from '../components/HotDeals';
import FeaturedTents from '../components/FeaturedTents';

const Home = () => {
    return (
        <div>
            <BannerBG bannerBG="defaultBannerBG">
                <Banner title="winter sale ends soon" subtitle="Tents at up to 70% off **">
                    <Link to="/tents" className="btn-primary">Check it out</Link>
                </Banner>
            </BannerBG>
            <HotDeals />
            <FeaturedTents />
        </div>
    )
}

export default Home;
