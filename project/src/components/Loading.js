import React from 'react';
import loadingGif from '../images/loading-arrow.gif';

export default function Loading() {
    return (
        <div className="loading">
            <h4>Tents info loading...</h4>
            <img src={loadingGif} alt="" />
        </div>
    )
}
