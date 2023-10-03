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

// Testing
const testString1 =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

// with special characters
const testString2 =
  "Smart people lear#$n from ever%^ything and everyone, average people from their exp*(erience, stupid people already, have all the answers";

// with numbers
const testString3 =
  "Smart people learn from every12thing and every45one, average people from their ex56perience, stupid people already, have all the answers";

// with uppercase
const testString4 =
  "Smart people learn from everythiGYUng and everyone, average people from their experHGFience, stupid people already, have all the answers";

// miscellaneous
const testString5 =
  "Smart peDFTople learn from every^%Tthing and every65^Gne, average people from their expe*U&HGrience, stupid people already, have all the answers";

const result1 = getLongestWordWithVowels(testString1);
const result2 = getLongestWordWithVowels(testString2);
const result3 = getLongestWordWithVowels(testString3);
const result4 = getLongestWordWithVowels(testString4);
const result5 = getLongestWordWithVowels(testString5);

console.log({ result1, result2, result3, result4, result5 });

// run script
// node index.js
// in root dir
