import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TentContext } from '../Context';
import Banner from '../components/Banner';
import StyledBG from '../components/StyledBG'
import defaultBG from '../images/tents/tent-1.jpg';
import '../components/TentAll.css';

export default class SingleTent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBG
        };
    };

    static contextType = TentContext;

    render() {

        const {getTent} = this.context;
        const tent = getTent(this.state.slug);
        if (!tent) {
            return (
                <div>
                    <h3>Oops! No items can be found.</h3>
                    <Link to="/tents" className="btn-primary">Return to Tents</Link>
                </div>
            )
        };

        const { name, price, capacity, weight, size, waterproof, warrantyYear, description, extras, images } = tent;
        return (
            <div>
                <StyledBG img={images[0] || this.state.defaultBG}>
                    <Banner title={name}>
                        <Link to="/tents" className="btn-primary">Return to Tents</Link>
                    </Banner>
                </StyledBG>
                <section className="single-tent-container">
                    <div className="image-display-container">
                        {images.map((image, index) => {
                            return <img key={index} src={image} alt={name} />
                        })}
                    </div>
                    <div className="description-container">
                        <article>
                            <h3>Description</h3>
                            <p>{description}</p>
                        </article>
                    </div>
                    <div className="rest-text-container">
                        <section className="features-container">
                            <h3>Features</h3>
                            <ul className="features">
                                {extras.map((extra, index) => {
                                    return <li key={index}>{extra}</li>
                                })}
                            </ul>
                        </section>
                        <article className="details-container">
                            <h3>Details</h3>
                            <ul className="features">
                                <li>
                                    Max capacity: {" "}
                                    {
                                        capacity > 1 ? `${capacity} people` : `${capacity} person`
                                    }
                                </li>
                                <li>Price: ${price}</li>
                                <li>Size: {size}</li>
                                <li>Weight: {weight} kg</li>
                                <li>{waterproof ? "Waterproof type" : "Water resistant type"}</li>
                                <li>{warrantyYear > 0 ? `${warrantyYear} year warranty` : "No warranty specified"}</li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        )
    };
}

