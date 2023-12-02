import test from "node:test";
import assert from "node:assert";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { main } from "./index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test("passing test", () => {
  const inputPath = path.join(__dirname, "input");
  const expects = 63981;

  const result = main(inputPath);

  assert.strictEqual(result, expects);
});
