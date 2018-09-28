import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import Input from './Input';
import { storeFactory } from '../test/testUtils';

/**
 * @function setup
 * @param {object} initialState
 * @returns {ShallowWrapper}
 */
const setup = (initialState ={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper;
};

describe('render', ()=> {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {success: false};
      wrapper = setup(initialState);
    });
    test('render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1)
      
    });
  });
  
  describe('word has been guessed', ()=> {
    let wrapper;
    beforeEach(() => {
      const initialState = {success: true};
      wrapper = setup(initialState);
    });
    test('render component without error', () => {
        const textMessage = findByTestAttr(wrapper, 'text-message');
        expect(textMessage.length).toBe(1);
    });
    test('render not input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
      
    });
    test('render not submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });

  });
});

describe('update state', ()=> {

});

