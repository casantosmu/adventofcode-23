/**
 * https://adventofcode.com/2023/day/1
 */

import fs from "node:fs";

const isDigit = (char) => !Number.isNaN(Number(char));

const findFistDigit = (line) => {
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (isDigit(char)) {
      return char;
    }
  }
};

const findLastDigit = (line) => {
  for (let i = 0; i < line.length; i++) {
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
