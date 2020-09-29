import React from 'react';
import { useContext } from 'react';
import { TentContext } from '../Context';
import Title from './Title';

//避免相同的type重複出現在下拉選單的option中
const getUniqueOption = (tents, capacityValue) => {
    return [...new Set(tents.map(tent => tent[capacityValue]))]
};

export default function TentsFilter({tents}) {

    const context = useContext(TentContext); 
    const {handleFilter, type, capacity, price, minPrice, maxPrice, minWeight, maxWeight, waterproof, warranty} = context;
    
    //設定tent type的下拉選單option
    let types = getUniqueOption(tents, "type");
    types = ["all", ...types];
    types = types.map((tent, index) => {
        return <option key={index} value={tent}>{tent}</option>
    });

    let people = getUniqueOption(tents, "capacity");
    people = people.map((person, index) => {
        return <option key={index} value={person}>{person}</option>
    });

    return (
        <section className="filter-container">
            <Title title="Search Tents" />
            <form className="filter-form">
                {/* select type*/}
                <div className="tent-form-div">
                    <label htmlFor="type">Tent Type</label>
                    <select name="type" id="type" value={type} onChange={handleFilter}>
                        {types}
                    </select>
                </div>
                {/* capacity */}
                <div className="tent-form-div">
                    <label htmlFor="capacity">Capacity</label>
                    <select name="capacity" id="capacity" value={capacity} onChange={handleFilter}>
                        {people}
                    </select>
                </div>
                {/* price */}
                <div className="tent-form-div">
                    <label htmlFor="price">Price ${price}</label>
                    <input 
                        type="range" 
                        name="price" 
                        min={minPrice} 
                        max={maxPrice} 
                        id="price" 
                        value={price} 
                        onChange={handleFilter} 
                    />
                </div>
                {/* weight */}
                <div className="tent-form-div weight-form-div">
                    <label htmlFor="weight">Min Weight</label>
                    <input 
                        type="number" 
                        name="minWeight" 
                        id="weight" 
                        value={minWeight} 
                        onChange={handleFilter} 
                    />
                    <br />
                    <label htmlFor="weight">Max Weight</label>
                    <input 
                        type="number" 
                        name="maxWeight" 
                        id="weight" 
                        value={maxWeight} 
                        onChange={handleFilter} 
                    />
                </div>
                {/* waterproof */}
                <div className="tent-form-div checkbox-div">
                    <input type="checkbox" name="waterproof" id="waterproof" checked={waterproof} onChange={handleFilter} />
                    <label htmlFor="waterproof">Waterproof</label>
                </div>
                {/* warranty */}
                <div className="tent-form-div checkbox-div">
                    <input type="checkbox" name="warranty" id="warranty" checked={warranty} onChange={handleFilter} />
                    <label htmlFor="warranty">Warranty</label>
                </div>
            </form>
        </section>
    )
}
