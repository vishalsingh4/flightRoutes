import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe("App Component", () => {
    const wrapper = shallow(<App />);
    it('should render the Header Component correctly - snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('renders component', () => {
        expect(wrapper.exists()).toBe(true);
    });
    it('renders the HeaderComponent component', () => {
        expect(wrapper.find('HeaderComponent').exists()).toBe(true);
    });
    it('renders the FlightDetails component', () => {
        expect(wrapper.find('FlightDetails').exists()).toBe(true);
    });
    it('renders the FooterComponent component', () => {
        expect(wrapper.find('FooterComponent').exists()).toBe(true);
    });
})