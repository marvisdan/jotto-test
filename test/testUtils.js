import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/reducers';
import { createStore } from 'redux';
/**
 * @function storeFactory 
 * @param {object} initialState - Initial state for store
 * @return {Store} - Redux store
 */
export const storeFactory = (initialState)  => {
  return createStore(rootReducer, initialState);
};
/**
 * Return node with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
  const PropError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
    expect(PropError).toBeUndefined();
}