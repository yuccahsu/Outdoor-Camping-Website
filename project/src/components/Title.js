import React from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import './HomePage.css';

export default function Title({ title }) {
    return (
        <div className="section-title">
            <IoIosArrowDropdownCircle size={60} className="section-title-icon" />
            <h2>{title}</h2>
            <div></div>
        </div>
    )
}
