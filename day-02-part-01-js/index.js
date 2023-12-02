/**
 * https://adventofcode.com/2023/day/2
 */

import fs from "node:fs";

const colorMaxMap = {
  red: 12,
  green: 13,
  blue: 14,
};

const getFirstDigit = (string) => string.match(/\d+/)[0];

const getColor = (string) => string.match(/red|green|blue/)[0];

const isPossible = (line) => {
  const colorsWithNumber = line.slice("Game X: ".length).split(/, |; /);

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

export const main = (filename) => {
  const fileContent = fs.readFileSync(filename, "utf8");
  let idsSum = 0;
  for (const line of fileContent.split("\n")) {
    if (isPossible(line)) {
      idsSum += Number(getFirstDigit(line));
    }
  }
  return idsSum;
};
