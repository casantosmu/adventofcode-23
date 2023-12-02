/**
 * https://adventofcode.com/2023/day/1
 */

import fs from "node:fs";

const isDigit = (char) => !Number.isNaN(Number(char));

const wordToDigitMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const wordsLengths = [
  ...new Set(Object.keys(wordToDigitMap).map((key) => key.length)),
];

const findFistDigit = (line) => {
  for (let i = 0; i < line.length; i++) {
    for (const wordLength of wordsLengths) {
      const word = line.slice(i, wordLength + i);
      const digitFromWord = wordToDigitMap[word];
      if (digitFromWord !== undefined) {
        return digitFromWord;
      }
    }
    const char = line[i];
    if (isDigit(char)) {
      return char;
    }
  }
};

const findLastDigit = (line) => {
  for (let i = 0; i < line.length; i++) {
    for (const wordLength of wordsLengths) {
      const word = line.slice(line.length - i - wordLength, line.length - i);
      const digitFromWord = wordToDigitMap[word];
      if (digitFromWord !== undefined) {
        return digitFromWord;
      }
    }
    const char = line[line.length - 1 - i];
    if (isDigit(char)) {
      return char;
    }
  }
};

export const main = (filename) => {
  const fileContent = fs.readFileSync(filename, "utf8");
  let sum = 0;
  for (const line of fileContent.split("\n")) {
    const firstDigit = findFistDigit(line);
    const lastDigit = findLastDigit(line);
    sum += Number(`${firstDigit}${lastDigit}`);
  }
  return sum;
};
