import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
  let contents;
  const guessedWordsRows = props.guessedWords.map((word, index) => (
    <tr data-test="guessed-word" key={index}>
      <td>{word.guessedWord}</td>
      <td>{word.letterMatchCount}</td>
    </tr>
  ))
  if(props.guessedWords.length === 0) { 
    contents = (
      <span data-test="guess-instruction">
        Try to guess the secret word !
      </span>
    )
  }
  else {
    contents = (
      <div data-test="guessed-words">
        <h3>GuessedWords</h3>
        <table>
          <thead>
            <tr><th>Guess</th><th>Matching Letter</th></tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div data-test="component-guessed-words">
      { contents }
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(PropTypes.shape({
    guessedWord: PropTypes.string.isRequired,
    letterMatchCount: PropTypes.number.isRequired,
  })).isRequired,
}

export default GuessedWords;

