import { useEffect, useState } from 'react';
import clsx from 'clsx';

// mock-data import
import data from 'mock-data/flight-details.json';

// utils import
import {
    getFlightLogo,
    getDateFormat,
    getDifferenceInMinutes
} from 'utils';

// css imports
import './index.scss';

// constants
const timeFormat = 'HH:mm';
const dateFormat = 'EEE, dd LLL';

const airportCodeMap = {
    DEL: 'New Delhi International Airport',
    DXB: 'Dubai International Airport'
};

const FlightDetails = () => {
    const [flightData, setFlightData] = useState([]);
    const [selectedFlightId, setSelectedFlightId] = useState('');

    useEffect(() => {
        setFlightData(data);
    }, []);

    const handleFlightSelection = id => {
        setSelectedFlightId(id);
    };

    return (
        <div className="flight-details">
            <h3 className='search-heading color-red fs-20 fw-600 pt-4 m-0 text-center' tabIndex='0' aria-label='Search Flight Results'>Search Flight Results</h3>
            {
                flightData?.length > 0 && flightData.map(item => {
                    const {
                        id,
                        flightName,
                        flightNumber,
                        sourceCode,
                        arrivalTime,
                        destinationCode,
                        destinationTime,
                        price,
                        noOfStops
                    } = item;

                    const flightLogo = getFlightLogo(flightName);
                    const sourceName = airportCodeMap[sourceCode];
                    const destinationName = airportCodeMap[destinationCode];
                    const arrivalTimeInHM = getDateFormat(arrivalTime, timeFormat);
                    const arrivalTimeInDM = getDateFormat(arrivalTime, dateFormat);
                    const destinationTimeInHM = getDateFormat(destinationTime, timeFormat);
                    const destinationTimeInDM = getDateFormat(destinationTime, dateFormat);
                    const flightDuration = getDifferenceInMinutes(arrivalTime, destinationTime);
                    const isSelected = (selectedFlightId === id);
                    return (
                        <div className={clsx({
                            'flight-container container rounded d-flex align-items-center my-4 px-4 py-3 position-relative': true,
                            'border-red box-shadow': isSelected,
                            'border': !isSelected
                        })} key={id} tabIndex='0' aria-labelledby={`${flightName} flight from ${sourceName} to ${destinationName}; duration ${flightDuration}; price ${price}`}>
                            <section className='detail-section d-flex align-items-center'>
                                <div className='logo-section d-flex flex-column'>
                                    <img src={flightLogo} alt='flight-logo' width='50' height='50' />
                                    <span className='flight-name color-grey fs-15 fw-500'>{flightName}</span>
                                    <span className='flight-number color-grey fs-15 fw-500'>{flightNumber}</span>
                                </div>
                                <div className='source-section d-flex flex-column'>
                                    <span className='source-code color-dark fs-15 fw-bold'>{sourceCode}</span>
                                    <span className='source-time-hm color-dark fs-18 fw-bold'>{arrivalTimeInHM}</span>
                                    <span className='source-time-dm color-grey fs-15 fw-500'>{arrivalTimeInDM}</span>
                                    <span className='source-name color-grey fs-15 fw-500'>{sourceName}</span>
                                </div>
                                <div className="duration d-flex flex-column">
                                    <span className='flight-duration color-grey fs-15 fw-600'>{flightDuration}</span>
                                    <img src="https://fly10.ek.aero/Images/farebrand_refresh/flight@2x.png" alt="flight-duration" width='30' height='30' />
                                    <span className='noOf-stops color-grey fs-15 fw-600'>{noOfStops}</span>
                                </div>
                                <div className='destination-section d-flex flex-column'>
                                    <span className='destination-code color-dark fs-15 fw-bold'>{destinationCode}</span>
                                    <span className='destination-time-hm color-dark fs-18 fw-bold'>{destinationTimeInHM}</span>
                                    <span className='destination-time-dm color-grey fs-15 fw-600'>{destinationTimeInDM}</span>
                                    <span className='destination-name color-grey fs-15 fw-600'>{destinationName}</span>
                                </div>
                            </section>
                            <div className='vertical-separator' />
                            <section className='booking-section d-flex align-items-center'>
                                <span className='price-section color-red fs-20 fw-700 text-center'>&#x20b9; {price}</span>
                                <button className={clsx({
                                    'book-btn border-0 rounded h-45 fs-18 fw-700': true,
                                    'disabled color-dark': isSelected,
                                    'bg-red color-white': !isSelected
                                })} aria-label='Select Flight' onClick={() => handleFlightSelection(id)}>SELECT</button>
                            </section>
                        </div>
                    )
                })
            }
        </div >
    )
};

export default FlightDetails;