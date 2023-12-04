/**
 * https://adventofcode.com/2023/day/3
 */

const isDigit = (char) => !Number.isNaN(Number(char));

const isSymbol = (value) => value !== "." && !isDigit(value);

const isVertical = (a, b) =>
  a.x <= b.x &&
  a.x + a.width >= b.x + b.width &&
  (a.y === b.y - 1 || a.y === b.y + 1);

const isHorizontal = (a, b) =>
  (a.x === b.x + 1 || a.x + a.width + 1 === b.x + b.width) && a.y === b.y;

const isDiagonal = (a, b) =>
  (a.x === b.x + 1 || a.x + a.width + 1 === b.x + b.width) &&
  (a.y === b.y - 1 || a.y === b.y + 1);

const isAdjacent = (a, b) =>
  isVertical(a, b) || isHorizontal(a, b) || isDiagonal(a, b);

export const main = (input) => {
  const numbers = [];
  const symbols = [];

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
      } else if (isSymbol(char)) {
        symbols.push({
          x: charIndex,
          y: lineIndex,
          width: 1,
        });
      }
    });
  });

  let sum = 0;
  for (const number of numbers) {
    for (const symbol of symbols) {
      if (isAdjacent(number, symbol)) {
        sum += Number(number.value);
        break;
      }
    }
  }

  return sum;
};
