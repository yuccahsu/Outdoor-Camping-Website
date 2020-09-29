import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImg from '../images/tents/details-1.jpg';
import './HomePage.css';

export default function Tent({ tent }) {

    const {slug, images, price, capacity} = tent;

    return (
        <article className="tents-container">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="pop up tent" />
            </div>
            <div className="info-highlight">
                <div className="info-circle"></div>
                <h4>${price}</h4>
                <p>{capacity} ppl</p>
            </div>
            <Link to={`/tents/${slug}`} className="btn-see-more tent-link">more details</Link>
        </article>
    )
}

Tent.propTypes = {
    tent: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
        capacity: PropTypes.number.isRequired       
    })
}

