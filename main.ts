// The Self-Checkout Is Judging You — make.fun bounty entry.
//
// A single judgmental remark from a smug self-checkout machine, written
// to /output/entry.txt. The gate accepts UTF-8 text of 1–200 characters,
// not only white space, on exactly one line — so the program checks its
// own output against those limits before it declares success.
//
// The line: the machine has just scanned a basket of twelve yoghurts
// and one banana, and it has opinions about the shopper's whole life.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function buildLine(): string {
  const basket = "Twelve yoghurts and a single banana";
  const verdict = "I have scanned your entire personality, and it expires Friday";
  return `${basket}. ${verdict}.`;
}

function gate(line: string): void {
  if (line.trim().length === 0) throw new Error("entry must not be blank");
  if ([...line].length > MAX_CHARS) {
    throw new Error(`entry is ${[...line].length} chars, over the ${MAX_CHARS} limit`);
  }
  if (line.includes("\n")) throw new Error("entry must be a single line");
}

const line = buildLine();
gate(line);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, line, "utf8");
console.log(`Wrote ${[...line].length} chars to ${OUTPUT_PATH}`);
