import React from 'react';
import Tent from './Tent';
import './HomePage.css';

export default function TentsList({tents}) {

    if (tents.length === 0) {
        return (
            <div className="no-search-results-msg">
                <h3>Hahaha...There are no results matching your search.</h3>
            </div>
        )           
    }
    return (
        <section className="tents-list-container">
            <div className="tents-list">
                {tents.map(tent => {
                    return <Tent key={tent.id} tent={tent} />;
                })}
            </div>
        </section>
    )
}
