import { getLetterMatchCount } from '../helpers/index';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * Return redux Thunk function that dispatch GUESS_WORD action and (conditionnaly) 
 * CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guess word
 * @returns {function} - return redux thunk function
 */
export const guessWord = (guessedWord) => {  
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD, 
      payload: {
        guessedWord,
        letterMatchCount,
      }
    });
    if ( guessedWord === secretWord ) {
      dispatch({type: actionTypes.CORRECT_GUESS});
    }
  };
};
