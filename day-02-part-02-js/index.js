/**
 * https://adventofcode.com/2023/day/2
 */

const getFirstDigit = (string) => string.match(/\d+/)[0];

const getColor = (string) => string.match(/red|green|blue/)[0];

const getPowerOfMinimumSet = (line) => {
  const lineMax = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const colorsWithNumber = line.replace(/Game \d+: /, "").split(/, |; /);

  for (const colorWithNumber of colorsWithNumber) {
    const color = getColor(colorWithNumber);
    const number = Number(getFirstDigit(colorWithNumber));

    const max = lineMax[color];
    if (number > max) {
      lineMax[color] = number;
    }
  }
  return Object.values(lineMax).reduce((acc, cur) => acc * cur);
};

export const main = (input) => {
  let powersSum = 0;
  for (const line of input.split("\n")) {
    powersSum += getPowerOfMinimumSet(line);
  }
  return powersSum;
};
