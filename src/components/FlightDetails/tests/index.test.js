import React from 'react';
import { shallow } from 'enzyme';
import FlightDetails from '..';

import data from 'mock-data/flight-details.json';

describe("FlightDetails Component", () => {
    const wrapper = shallow(<FlightDetails />);

    it('should render the FlightDetails Component correctly - snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('renders component', () => {
        expect(wrapper.exists()).toBe(true);
    });
    it('should render heading', () => {
        expect(wrapper.find('.search-heading').text()).toEqual('Search Flight Results');
    });
    it('should render mock data correctly', () => {
        const mockData = data;
        const mockDataLength = mockData && mockData.length;

        React.useState = jest.fn().mockReturnValue([mockData, () => { }]);

        const wrapper = shallow(<FlightDetails />);
        expect(wrapper.find('.flight-details').children().length).toEqual(mockDataLength + 1);
    });
    it('mock useEffect function', () => {
        const mockApiFn = jest.fn();
        React.useState = jest.fn().mockReturnValue([data, mockApiFn]);
        jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());

        shallow(<FlightDetails />);
        expect(mockApiFn).toHaveBeenCalled();
        expect(mockApiFn).toHaveBeenCalledTimes(1);
    });
    it('should select flight', () => {
        React.useState = jest.fn().mockReturnValueOnce([data, () => { }]).mockReturnValueOnce([1, () => { }]);

        const wrapper = shallow(<FlightDetails />);
        expect(wrapper.find('.border-red').exists()).toBe(true);
    });
    it('mock click function on select flight', () => {
        const mockTestData = [
            {
                id: 1,
                flightName: "EMIRATES",
                flightNumber: "EM1092",
                sourceCode: "DEL",
                arrivalTime: "30/09/2021 08:10:02",
                destinationCode: "DXB",
                destinationTime: "30/09/2021 14:10:02",
                price: "17424",
                noOfStops: "non-stop"
            }
        ];
        React.useState = jest.fn().mockReturnValueOnce([mockTestData, () => { }]).mockReturnValueOnce([1, () => { }]);

        const wrapper = shallow(<FlightDetails />);
        wrapper.find('.book-btn').simulate('click');
        expect(wrapper.find('.border-red').exists()).toBe(true);
    });
    it('should render test mock data correctly', () => {
        const mockTestData = [
            {
                id: 1,
                flightName: "EMIRATES",
                flightNumber: "EM1092",
                sourceCode: "DEL",
                arrivalTime: "30/09/2021 08:10:02",
                destinationCode: "DXB",
                destinationTime: "30/09/2021 14:10:02",
                price: "17424",
                noOfStops: "non-stop"
            }
        ];
        const mockData = mockTestData;
        const mockDataLength = mockData && mockData.length;

        React.useState = jest.fn().mockReturnValue([mockData, () => { }]);

        const wrapper = shallow(<FlightDetails />);
        expect(wrapper.find('.flight-details').children().length).toEqual(mockDataLength + 1);
        expect(wrapper.find('img').first().prop('src')).toEqual('emirates-tail.png');
        expect(wrapper.find('.flight-name').text()).toEqual(mockTestData[0].flightName);
        expect(wrapper.find('.flight-number').text()).toEqual(mockTestData[0].flightNumber);
        expect(wrapper.find('.source-code').text()).toEqual(mockTestData[0].sourceCode);
        expect(wrapper.find('.source-time-hm').text()).toEqual('08:10');
        expect(wrapper.find('.source-time-dm').text()).toEqual('Thu, 30 Sep');
        expect(wrapper.find('.source-name').text()).toEqual('New Delhi International Airport');
        expect(wrapper.find('.flight-duration').text()).toEqual('6hr 0mins');
        expect(wrapper.find('img').last().prop('src')).toEqual('https://fly10.ek.aero/Images/farebrand_refresh/flight@2x.png');
        expect(wrapper.find('.noOf-stops').text()).toEqual(mockTestData[0].noOfStops);
        expect(wrapper.find('.destination-code').text()).toEqual(mockTestData[0].destinationCode);
        expect(wrapper.find('.destination-time-hm').text()).toEqual('14:10');
        expect(wrapper.find('.destination-time-dm').text()).toEqual('Thu, 30 Sep');
        expect(wrapper.find('.destination-name').text()).toEqual('Dubai International Airport');
        expect(wrapper.find('.price-section').text()).toEqual(`₹ ${mockTestData[0].price}`);
        expect(wrapper.find('.book-btn').text()).toEqual('SELECT');
    });
})