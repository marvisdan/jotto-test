import { combineReducers } from 'redux';
import successReducer from './successReducer';
import guessedWordsReducer from './guessedWordsReducer';

const rootReducer = combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
});

export default rootReducer;

