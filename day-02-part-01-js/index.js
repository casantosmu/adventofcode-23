/**
 * https://adventofcode.com/2023/day/2
 */

const colorMaxMap = {
  red: 12,
  green: 13,
  blue: 14,
};

const getFirstDigit = (string) => string.match(/\d+/)[0];

const getColor = (string) => string.match(/red|green|blue/)[0];

const isPossible = (line) => {
  const colorsWithNumber = line.replace(/Game \d+: /, "").split(/, |; /);

  for (const colorWithNumber of colorsWithNumber) {
    const color = getColor(colorWithNumber);
    const number = Number(getFirstDigit(colorWithNumber));

    const colorMax = colorMaxMap[color];
    if (number > colorMax) {
      return false;
    }
  }
  return true;
};

export const main = (input) => {
  let idsSum = 0;
  for (const line of input.split("\n")) {
    if (isPossible(line)) {
      idsSum += Number(getFirstDigit(line));
    }
  }
  return idsSum;
};
