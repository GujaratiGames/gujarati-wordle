import React, { useState } from 'react';
import { vowels, consonants, letterIdMap, gujaratiLettersWithIds } from '../constants/gujaratiletters';
import { getWordleFeedback } from '../Utils/WordleLogic';
import Navbar from '../Components/Navbar';


// Create reverse mapping: id → letter
const idLetterMap = gujaratiLettersWithIds.reduce((map, obj) => {
  map[obj.id] = obj.letter;
  return map;
}, {});

const TARGET_WORD = ['10048', '10041', '10034'];

const WordleGame = () => {
  const [currentGuess, setCurrentGuess] = useState([]);
  const [guesses, setGuesses] = useState([]);

  const maxLength = TARGET_WORD.length;

  const handleLetterClick = (letter) => {
    const letterId = letterIdMap[letter];
    if (letterId && currentGuess.length < maxLength) {
      setCurrentGuess((prev) => [...prev, letterId]);
    }
  };

  const handleDelete = () => {
    setCurrentGuess((prev) => prev.slice(0, -1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length !== maxLength) {
      alert(`Word must be ${maxLength} letters.`);
      return;
    }

    const feedback = getWordleFeedback(currentGuess, TARGET_WORD);
    setGuesses((prev) => [...prev, feedback]);
    setCurrentGuess([]);
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1><b> GUJARATI WORDLE</b></h1>

      
      <div className="guesses">
        {guesses.map((guessFeedback, index) => (
          <div key={index} className="guess-row">
            {guessFeedback.map(({ letter, color }, i) => (
              <div key={i} className={`guess-box ${color}`}>
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentGuess.map(id => idLetterMap[id] || '?').join('')}
          readOnly
          className="wordle-input"
        />
        <div className="input-buttons">
          <button type="submit" className="button">SUBMIT</button>
          <button type="button" onClick={handleDelete} className="button">DEL</button>
          
        </div>

        <br></br>
        <br></br>
      </form>
                     <div className="keyboard-row">
                        <div className="keyboard-column">
                            <div className="keyboard-grid-vo">
                            {vowels.map((vowel, i) => (
                              <button key={i} onClick={() => handleLetterClick(vowel)} 
                              className="key-button">
                                {vowel}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="keyboard-column">
                            <div className="keyboard-grid-co">
                            {consonants.map((consonant, i) => (
                              <button key={i} onClick={() => handleLetterClick(consonant)} 
                              className="key-button">
                                {consonant}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>



    </div>
    </>
  );
};

export default WordleGame;
