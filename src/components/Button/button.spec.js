/**
 * @jest-environment node
 */
import 'jsdom-global/register';
import 'jest-styled-components';
import React from 'react';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

configure({ adapter: new Adapter() });

describe('Button-general', () => {
  it('styled the same', () => {
    const wrapper = mount(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('button-loading', () => {
  let wrapper;
  beforeEach(() => {
    const props = { loading: true };
    wrapper = shallow(<Button {...props} />);
  });

  it('render fontawesome and span while loading', () => {
    expect(wrapper.find(FontAwesomeIcon).exists()).toBe(true);
    expect(wrapper.find('span').exists()).toBe(true);
  });
});

describe('button-not-loading', () => {
  let wrapper;
  beforeEach(() => {
    const props = { loading: false, label: 'button', disabled: false };
    wrapper = shallow(<Button {...props} />);
  });
  it('render label and not Icon while loading is false', () => {
    expect(wrapper.find(FontAwesomeIcon).exists()).toBe(false);
    expect(wrapper.find('span').exists()).toBe(false);
  });
});
