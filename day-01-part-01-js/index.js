/**
 * https://adventofcode.com/2023/day/1
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, "input");
const inputContent = fs.readFileSync(inputFile, "utf8");

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

let sum = 0;
for (const line of inputContent.split("\n")) {
  const firstDigit = findFistDigit(line);
  const lastDigit = findLastDigit(line);
  sum += Number(`${firstDigit}${lastDigit}`);
}

console.log("Sum result:", sum);
