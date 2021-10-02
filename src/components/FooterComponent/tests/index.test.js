import React from 'react';
import { shallow } from 'enzyme';
import FooterComponent from '..';

describe("Footer Component", () => {
    const wrapper = shallow(<FooterComponent />);

    it('should render the Footer Component correctly - snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('renders component', () => {
        expect(wrapper.exists()).toBe(true);
    });
    it('renders the links', () => {
        expect(wrapper.find('.link').at(0).text()).toEqual('ABOUT US');
        expect(wrapper.find('.link').at(1).text()).toEqual('PRIVACY');
        expect(wrapper.find('.link').at(2).text()).toEqual('TERMS OF USE');
        expect(wrapper.find('.link').at(3).text()).toEqual('CAREERS');
        expect(wrapper.find('.link').at(4).text()).toEqual('CUSTOMER SERVICE');
    });
    it('render copyright', () => {
        expect(wrapper.find('.copyright').text()).toEqual('© 2021 Le Travenues Technology Ltd. Dubai');
    });
})