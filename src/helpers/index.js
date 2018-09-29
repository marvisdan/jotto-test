
/**
 * @function getLetterMatchCount
 * @param {string} guessedWord - string guessed word
 * @param {string} secretWord - string secret word
 * @return {number} - nulber of letter matched between guessed word and secret word
 */

export function getLetterMatchCount(guessedWord, secretWord){
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}