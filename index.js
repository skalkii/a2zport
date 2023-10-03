const VOWELS = {
  a: "a",
  e: "e",
  i: "i",
  o: "o",
  u: "u",
};

const isVowel = (letter) => letter in VOWELS;

const isLowerCase = (letter) => {
  const characterCode = letter.charCodeAt(0);
  return characterCode >= 97 && characterCode <= 122;
};

const isSpace = (character) => character === " ";

// time complexity O(N)
const getLongestWordWithVowels = (sentence) => {
  let result = "";
  let resultLength = 0;
  let resultVowelLength = 0;

  let currentWord = "";
  let currentWordLength = 0;
  let currentWordVowelLength = 0;

  for (const character of sentence) {
    // word breaker
    if (isSpace(character)) {
      if (
        currentWordLength > resultLength ||
        (currentWordLength === resultLength &&
          currentWordVowelLength > resultVowelLength)
      ) {
        // update result
        result = currentWord;
        resultLength = currentWordLength;
        resultVowelLength = currentWordVowelLength;
      }
      // reset current word
      currentWord = "";
      currentWordLength = 0;
      currentWordVowelLength = 0;
    } else {
      // set current word
      if (isVowel(character)) currentWordVowelLength += 1;
      if (isLowerCase(character)) {
        currentWordLength += 1;
        currentWord += character;
      }
    }
  }

  return result;
};
