/**
 * https://adventofcode.com/2023/day/4
 */

const buildNumbersSet = (line) =>
  new Set(line.replace(/Card\s+\d+:.+\| /g, "").match(/\d+/g));

const buildWinningNumbersSet = (line) =>
  new Set(line.replace(/Card\s+\d+:\s+| \|.+/g, "").match(/\d+/g));

export const main = (input) => {
  let sum = 0;
  for (const line of input.split("\n")) {
    const numbers = buildNumbersSet(line);
    const winningNumbers = buildWinningNumbersSet(line);
    let matchesCount = 0;
    for (const number of numbers) {
      if (winningNumbers.has(number)) {
        matchesCount++;
      }
    }
    sum += matchesCount > 1 ? Math.pow(2, matchesCount - 1) : matchesCount;
  }
  return sum;
};
