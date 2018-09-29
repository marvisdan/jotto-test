import { actionTypes } from "../actions";

/**
 * @function secretWordReducer
 * @param {string} state - State before reducer
 * @param {object} action - Action send to reducer
 * @returns { string } - New state ( secret word payload from action)
 */

const secretWordReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
    console.log('action.payload', action.payload);
    
      return action.payload;
    default:
      return state;
  };
}
export default secretWordReducer;