/**
 * https://adventofcode.com/2023/day/4
 */

const buildNumbersSet = (line) =>
  new Set(line.replace(/Card\s+\d+:.+\| /g, "").match(/\d+/g));

const buildWinningNumbersSet = (line) =>
  new Set(line.replace(/Card\s+\d+:\s+| \|.+/g, "").match(/\d+/g));

export const main = (input) => {
  const copiesMap = new Map();
  let sum = 0;
  input.split("\n").forEach((line, index) => {
    const id = index + 1;
    const instances = (copiesMap.get(id) ?? 0) + 1;
    const numbers = buildNumbersSet(line);
    const winningNumbers = buildWinningNumbersSet(line);
    let matchesCount = 0;
    for (const number of numbers) {
      if (winningNumbers.has(number)) {
        const idToIncrement = id + 1 + matchesCount;
        const oldValue = copiesMap.get(idToIncrement) ?? 0;
        const newValue = oldValue + instances;
        copiesMap.set(idToIncrement, newValue);
        matchesCount++;
      }
    }
    sum += instances;
  });
  return sum;
};
