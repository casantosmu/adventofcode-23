import test from "node:test";
import assert from "node:assert";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import { main } from "./index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test("Day 2 - Part 1", () => {
  const inputPath = path.join(__dirname, "input");
  const input = fs.readFileSync(inputPath, "utf8");
  const expects = 2449;

  const result = main(input);

  assert.strictEqual(result, expects);
});
