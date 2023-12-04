/**
 * https://adventofcode.com/2023/day/3
 */

const isDigit = (char) => !Number.isNaN(Number(char));

const isGear = (value) => value === "*";

const isVertical = (a, b) =>
  a.x < b.x + b.width &&
  a.x + a.width > b.x &&
  (a.y === b.y + 1 || a.y === b.y - 1);

const isHorizontal = (a, b) =>
  (a.x === b.x + b.width || a.x + a.width === b.x) && a.y === b.y;

const isDiagonal = (a, b) =>
  (a.x === b.x + b.width || a.x + a.width === b.x) &&
  (a.y === b.y + 1 || a.y === b.y - 1);

const isAdjacent = (a, b) =>
  isVertical(a, b) || isHorizontal(a, b) || isDiagonal(a, b);

export const main = (input) => {
  const numbers = [];
  const gears = [];

  input.split("\n").forEach((line, lineIndex) => {
    let currentNumber = null;

    line.split("").forEach((char, charIndex) => {
      if (isDigit(char)) {
        if (currentNumber === null) {
          currentNumber = {
            value: char,
            x: charIndex,
            y: lineIndex,
            width: 1,
          };
        } else {
          currentNumber.value += char;
          currentNumber.width++;
        }

        const nextChar = line[charIndex + 1];
        if (!isDigit(nextChar)) {
          numbers.push(currentNumber);
          currentNumber = null;
        }
      } else if (isGear(char)) {
        gears.push({
          x: charIndex,
          y: lineIndex,
          width: 1,
        });
      }
    });
  });

  let sum = 0;
  for (const gear of gears) {
    const adjacentNumbers = [];
    for (const number of numbers) {
      if (isAdjacent(gear, number)) {
        adjacentNumbers.push(Number(number.value));
        if (adjacentNumbers.length === 2) {
          sum += adjacentNumbers.reduce((acc, cur) => acc * cur);
          break;
        }
      }
    }
  }

  return sum;
};
