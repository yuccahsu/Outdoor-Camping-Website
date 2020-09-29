import React from 'react';
import { TentConsumer } from '../Context';
import Loading from './Loading';
import TentsFilter from './TentsFilter';
import TentsList from './TentsList';
import './TentAll.css';

export default function TentsContainer() {
    return (
        <TentConsumer>
            {value => {
                const {tents, sortedTents, loading} = value;
                if (loading) {
                    return <Loading />;
                }
                return (
                    <div className="tents-page-container">
                        <TentsFilter tents={tents} />
                        <TentsList tents={sortedTents} />
                    </div>
                )
            }}
        </TentConsumer>

    )
};
