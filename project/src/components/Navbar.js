import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoMdBonfire } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import './Navbar.css';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-header">
                    <Link to="/" className="nav-header-link">
                        <IoMdBonfire size={36} /><span><h1>CamperBees</h1></span>
                    </Link>
                    <button className="nav-btn" onClick={this.handleToggle }>
                        <IoMdMenu size={36} />
                    </button>
                </div>
                <div>
                    <ul className={this.state.isOpen ? "nav-links nav-show" : "nav-links"}> 
                        <li className="nav-links-list">
                            <Link to="/" className="nav-links-link">Home</Link>
                            <Link to="/tents" className="nav-links-link">Tents</Link>
                            <Link to="/hiking" className="nav-links-link">Hiking</Link>
                            <Link to="/cookware" className="nav-links-link">Cookware</Link>
                            <Link to="/backpacks" className="nav-links-link">Backpacks</Link>
                            <Link to="/contact" className="nav-links-link">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
