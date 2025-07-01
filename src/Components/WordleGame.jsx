import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { vowels, consonants, letterIdMap, gujaratiLettersWithIds } from '../constants/gujaratiletters';
import { getWordleFeedback } from '../Utils/WordleLogic';
import Navbar from '../Components/Navbar';

const idLetterMap = gujaratiLettersWithIds.reduce((map, obj) => {
  map[obj.id] = obj.letter;
  return map;
}, {});

const TARGET_WORD = ['10048', '10041', '10034']; // Example target word

const WordleGame = () => {
  const [currentGuess, setCurrentGuess] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const maxLength = TARGET_WORD.length;
  const navigate = useNavigate();

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

  const handleRetry = () => {
    setGuesses([]);
    setCurrentGuess([]);
  };

  const handleBackToMenu = () => {
    navigate('/');
  };

  const attemptCount = guesses.length;
  const success = guesses.some(guess =>
    guess.every(({ color }) => color === 'green')
  );
  const failed = attemptCount >= 6 && !success;

  const targetWordReadable = TARGET_WORD.map(id => idLetterMap[id] || '?').join('');

  return (
    <>
      <Navbar />
      <div className="container">
        <h1><b>GUJARATI WORDLE</b></h1>

        <div className="attempt-info">
          {!success && !failed && <p>Attempt {attemptCount + 1} of 6</p>}
          {failed && (
            <div className="failure-message">
              <p><b>You failed!</b> The correct word was: <span style={{ color: 'red' }}>{targetWordReadable}</span></p>
            </div>
          )}
          {success && (
            <div className="success-message">
              <p><b>Congratulations!</b> You guessed the word in {attemptCount} {attemptCount === 1 ? 'try' : 'tries'}.</p>
            </div>
          )}
        </div>

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

        {!success && !failed && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={currentGuess.map(id => idLetterMap[id] || '?').join('')}
              readOnly
              className="wordle-input"
            />
            <div className="input-buttons">
              <button type="submit" className="button" disabled={attemptCount >= 6}>SUBMIT</button>
              <button type="button" onClick={handleDelete} className="button">DEL</button>
            </div>
            <br /><br />
          </form>
        )}

        {(failed || success) && (
          <div className="endgame-buttons">
            <button onClick={handleRetry} className="button">Retry</button>
            <button onClick={handleBackToMenu} className="button">Back to Main Menu</button>
          </div>
        )}

        <div className="keyboard-row">
          <div className="keyboard-column">
            <div className="keyboard-grid-vo">
              {vowels.map((vowel, i) => (
                <button key={i} onClick={() => handleLetterClick(vowel)} className="key-button" disabled={failed || success}>
                  {vowel}
                </button>
              ))}
            </div>
          </div>

          <div className="keyboard-column">
            <div className="keyboard-grid-co">
              {consonants.map((consonant, i) => (
                <button key={i} onClick={() => handleLetterClick(consonant)} className="key-button" disabled={failed || success}>
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
