export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * Return redux Thunk function that dispatch GUESS_WORD action and (conditionnaly) 
 * CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord
 * @returns {function}
 */
export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {

  };
};
