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
};

describe('render', ()=> {
  describe('word has not been guessed', ()=> {
    test('render component without error', () => {

    });
    test('render input box', () => {
      
    });
    test('render submit button', () => {
      
    });
  });
  
  describe('word has been guessed', ()=> {
    test('render component without error', () => {

    });
    test('render not input box', () => {
      
    });
    test('render not submit button', () => {
      
    });

  });
});

describe('update state', ()=> {

});

