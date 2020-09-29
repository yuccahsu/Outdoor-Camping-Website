import React, { Component } from 'react';
import { FaCampground } from "react-icons/fa";
import { FaHiking } from "react-icons/fa";
import { GiFishCooked } from "react-icons/gi";
import { GiBackpack } from "react-icons/gi";
import Title from './Title';

export default class HotDeals extends Component {

    state={
        hotDeals: [
            {
                icon: <FaCampground size={36} />,
                title: "Pop Up Tents",
                info: "Even the most time-deprived or rookie camper can get their tent set up in minutes, with the Instant Up Tents from Coleman. Available in various sizes and configurations, there’s a perfect size for solo camping, lightweight four wheel drive touring as well as for weekend getaways and family camping."
            },
            {
                icon: <FaHiking size={36} />,
                title: "Hiking Gear",
                info: "Even the most time-deprived or rookie camper can get their tent set up in minutes, with the Instant Up Tents from Coleman. Available in various sizes and configurations, there’s a perfect size for solo camping, lightweight four wheel drive touring as well as for weekend getaways and family camping."
            },
            {
                icon: <GiFishCooked size={36} />,
                title: "Cookware",
                info: "Even the most time-deprived or rookie camper can get their tent set up in minutes, with the Instant Up Tents from Coleman. Available in various sizes and configurations, there’s a perfect size for solo camping, lightweight four wheel drive touring as well as for weekend getaways and family camping."
            },
            {
                icon: <GiBackpack size={36} />,
                title: "Backpacks",
                info: "Even the most time-deprived or rookie camper can get their tent set up in minutes, with the Instant Up Tents from Coleman. Available in various sizes and configurations, there’s a perfect size for solo camping, lightweight four wheel drive touring as well as for weekend getaways and family camping."
            }
        ]
    }

    render() {
        return (
            <section className="hotdeals-container">
                <Title title="What's hot right now" />
                <div className="hotdeals-list-container">
                    {this.state.hotDeals.map((item, index) => {
                        return (
                            <article key={index} className="hotdeals-list">
                                <div>{item.icon}</div>
                                <h5>{item.title}</h5>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
