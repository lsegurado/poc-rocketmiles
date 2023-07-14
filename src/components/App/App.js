import React, { useState, useEffect } from 'react';
import './App.style.scss'

import hotelResultService from '../../services/hotel-result/hotel-result.service';

const ORDERS_OPTIONS = {
    RECOMMENDED: null,
    LOW_TO_HIGH: 1,
    HIGH_TO_LOW: 2
}

const App = () => {
    const [hotels, setHotels] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [orderOption, setOrderOption] = useState(ORDERS_OPTIONS.RECOMMENDED);

    useEffect(() => {
        hotelResultService.get().then(response => {
            setHotels(response.results.hotels)
        })
    }, []);

    const onFilterChange = (e) => {
        setOrderOption(Number(e.target.value));
    }

    const filteredHotels = () => {
        return userInput === '' ? hotels : hotels.filter(hotel => hotel.hotelStaticContent.name.toLowerCase().includes(userInput.toLowerCase()));
    }

    const resetUserInput = () => {
        setUserInput('');
        setOrderOption(ORDERS_OPTIONS.RECOMMENDED);
    }

    const filteredAndOrderedHotels = () => {
        const sortedHotels = filteredHotels().sort((hotelA, hotelB) => {
            switch (orderOption) {
                case ORDERS_OPTIONS.HIGH_TO_LOW: {
                    return hotelB.lowestAveragePrice.amount - hotelA.lowestAveragePrice.amount;
                }
                case ORDERS_OPTIONS.LOW_TO_HIGH: {
                    return hotelA.lowestAveragePrice.amount - hotelB.lowestAveragePrice.amount;
                }
                default: {
                    return true;
                }
            }
        })
        return sortedHotels;
    }

    return (
        <div className="app-container">
            <div className="content">
                <div>
                    <div className="filters">
                        Hotel name
                        <input type="text" className="input" value={userInput} onChange={(e) => { setUserInput(e.target.value) }} />
                        Price
                        <select name="" className="select" value={orderOption} onChange={onFilterChange}>
                            <option value={ORDERS_OPTIONS.RECOMMENDED}>Recommended</option>
                            <option value={ORDERS_OPTIONS.LOW_TO_HIGH}>Price low-to-high</option>
                            <option value={ORDERS_OPTIONS.HIGH_TO_LOW}>Price high-to-low</option>
                        </select>
                        <button className="button" onClick={resetUserInput}>Reset</button>
                    </div>
                </div>

                <div className="hotel-list">
                    {filteredAndOrderedHotels().map(hotel => (
                        <div className="hotel-card" key={hotel.id}>
                            <div
                                className="image"
                                style={{ backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})` }}>
                            </div>
                            <div className="hotel-details">
                                <div className="hotel-name">
                                    {hotel.hotelStaticContent.name}
                                </div>
                                <div className="location">
                                    {hotel.hotelStaticContent.neighborhoodName}
                                </div>
                            </div>
                            <div className="price-details">
                                <span className="price">
                                    <span dangerouslySetInnerHTML={{ __html: hotel.lowestAveragePrice.symbol }}></span>
                                    {hotel.lowestAveragePrice.amount}
                                </span>
                                <span className="rewards">
                                    {hotel.rewards.miles} miles
                                </span>
                                <button className="button">Select</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App;
