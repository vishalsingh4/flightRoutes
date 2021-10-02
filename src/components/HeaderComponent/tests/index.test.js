import React from 'react';
import { shallow } from 'enzyme';
import HeaderComponent from '..';

import logo from 'assets/logo.png';
import avatar from 'assets/avatar.png';

describe("Header Component", () => {
    const wrapper = shallow(<HeaderComponent />);

    it('should render the Header Component correctly - snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('renders component', () => {
        expect(wrapper.exists()).toBe(true);
    });
    it('renders the header logo', () => {
        expect(wrapper.find('img').first().prop('src')).toEqual(logo);
    });
    it('renders the user avatar', () => {
        expect(wrapper.find('img').last().prop('src')).toEqual(avatar);
    });
    it('renders the links', () => {
        expect(wrapper.find('.link').at(0).text()).toEqual('BOOK');
        expect(wrapper.find('.link').at(1).text()).toEqual('MANAGE');
        expect(wrapper.find('.link').at(2).text()).toEqual('EXPERIENCE');
        expect(wrapper.find('.link').at(3).text()).toEqual('WHERE WE FLY');
        expect(wrapper.find('.link').at(4).text()).toEqual('LOYALTY');
        expect(wrapper.find('.link').at(5).text()).toEqual('HELP');
    });
    it('render logged in user', () => {
        expect(wrapper.find('.logged-user').text()).toEqual('Katy Pearson');
    });
})