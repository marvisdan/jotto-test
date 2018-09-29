import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessword action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess ='train';

  describe('no guessed word', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test(' update state correctly for unsuccessful guessed', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }],
      };
      expect(newState).toEqual(expectedState);
      
    });
    test('update state correctly for successful guessed', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCount: secretWord.length
        }],
      };
      expect(newState).toEqual(expectedState);
    });

  });

  describe('some guessed word', () => {
    const guessedWords = [{guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = {secretWord, guessedWords };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test(' update state correctly for unsuccessful guessed', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords : [
        ...guessedWords,
        {
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }],
      };
      expect(newState).toEqual(expectedState);
    });

    test(' update state correctly for successful guessed', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: secretWord.length
          }
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});