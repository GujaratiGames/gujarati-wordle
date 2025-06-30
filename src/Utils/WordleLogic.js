import {  gujaratiLettersWithIds } from '../constants/gujaratiletters';

// Create reverse mapping: id → letter
const idLetterMap = gujaratiLettersWithIds.reduce((map, obj) => {
  map[obj.id] = obj.letter;
  return map;
}, {});

export function getWordleFeedback(guess, target) {
  const guessArr = [...guess];
  const targetArr = [...target];
  
  const feedback = new Array(guessArr.length).fill(null);
  const matchedIndices = new Set();

  for (let i = 0; i < guessArr.length; i++) {
    if (guessArr[i] === targetArr[i]) {
      feedback[i] = 'green';
      matchedIndices.add(i);
    }
  }

  for (let i = 0; i < guessArr.length; i++) {
    if (feedback[i] === null) {
      let foundIndex = -1;
      for (let j = 0; j < targetArr.length; j++) {
        if (!matchedIndices.has(j) && guessArr[i] === targetArr[j]) {
          foundIndex = j;
          break;
        }
      }
      feedback[i] = foundIndex !== -1 ? 'yellow' : 'grey';
      if (foundIndex !== -1) matchedIndices.add(foundIndex);
    }
  }

  return guessArr.map((id, i) => ({
    letter: idLetterMap[id] || '?',
    color: feedback[i]
  }));
}
