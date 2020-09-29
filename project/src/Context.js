import React, { Component } from 'react';
import TentsInfo from './TentsInfo';

const TentContext = React.createContext();

class TentProvider extends Component {

    state = {
        tents: [],
        sortedTents: [],
        featuredTents: [],
        loading: true, 
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        weight: 0,
        minWeight: 0,
        maxWeight: 0,
        waterproof: false,
        warranty: false
    };

    componentDidMount() {
        let tents = this.formatData(TentsInfo);
        let featuredTents = tents.filter(tent => tent.featured === true);
        let maxPrice = Math.max(...tents.map(tent => tent.price)); //將maxPrice預設為最高價tent的價格
        let maxWeight = Math.max(...tents.map(tent => tent.weight)); //將maxWeight預設為最重的tent的重量
        this.setState({
            tents,
            sortedTents: tents,
            featuredTents,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxWeight
        });
    };

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url)
            let tent = {...item.fields, images, id}
            return tent;
        })
        return tempItems;
    };

    getTent = (slug) => {
        let tempTents = [...this.state.tents];
        const tent = tempTents.find(tent => tent.slug === slug)
            return tent         
    };

    handleFilter = e => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;  //如果是checkbox，value = checked，否則就是一般value
        const name = e.target.name;
        
        this.setState({
            [name]: value
        }, 
        this.filterTents);  //filterTents is a callback function, it will only be executed when the [name]: value get changed.
    };
    
    filterTents = () => {
        let {tents, type, capacity, price, minWeight, maxWeight, waterproof, warranty} = this.state;
        //put all the tents in an array
        let tempTents = [...tents];
        //transform values from String to Number
        capacity= parseInt(capacity);
        price = parseInt(price);

        //filter by type
        if (type !== "all") {
            tempTents = tempTents.filter(tent => tent.type === type);
        };
        //filter by capacity
        if (capacity !== 1) {
            tempTents = tempTents.filter(tent => tent.capacity >= capacity);
        };
        //filter by price
        tempTents = tempTents.filter(tent => tent.price <= price);
        //filter by weight
        tempTents = tempTents.filter(tent => tent.weight >= minWeight && tent.weight <= maxWeight);
        //filter by waterproof
        if (waterproof) {
            tempTents = tempTents.filter(tent => tent.waterproof === true);
        }
        //filter by warranty
        if (warranty) {
            tempTents = tempTents.filter(tent => tent.warranty === true);
        }

        this.setState({
            sortedTents: tempTents
        });
    };

    render() {
        return (
            <TentContext.Provider 
                value={{ 
                    ...this.state, 
                    getTent: this.getTent,
                    handleFilter: this.handleFilter 
                }}>
                {this.props.children}
            </TentContext.Provider>
        )
    }
}

const TentConsumer = TentContext.Consumer;

export { TentContext, TentProvider, TentConsumer };
