import React, { Component } from 'react';
import { TentContext } from '../Context';
import Title from './Title';
import Loading from './Loading';
import Tent from './Tent';

export default class FeaturedTents extends Component {

    static contextType = TentContext;

    render() {

        let { loading, featuredTents: tents } = this.context;
        tents = tents.map(tent => {
            return <Tent key={tent.id} tent={tent} />
        })

        return (
            <section className="featured-tent-container">
                <Title title="Featured Tents" />
                <div className="tents-list">
                    {loading ? <Loading /> : tents}
                </div> 
            </section>
        )
    }
}
