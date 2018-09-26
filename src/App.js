import React, { Component } from 'react';
import './App.css';

import GuesseWords from './GuessedWords';
import Congrats from './Congrats';

class App extends Component {
  render() {
    return (
      <div className="container">
      <h1>Jotto</h1>
        <Congrats success={true} />
        <GuesseWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]}/>
      </div>
    );
  }
}

export default App;
