// One-Liner Laugh Lab — entry for u-suroso-69-one-liner-laugh-lab-6ccf3aae.
// The prompt: the excuse a robot vacuum gives after eating a sock.
// Writes exactly one short funny line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: a deadpan, unrepentant vacuum. Short, punchy, and the
// punchline ("Please empty me") only works coming from a robot vacuum.
const ENTRY_LINE =
  "It smelled like feet and adventure. I regret nothing. Please empty me.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate allows 1 to 200 characters, so refuse to write anything
// outside that range rather than submitting an invalid entry.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 200) {
  throw new Error(`Entry line must be 1-200 characters, got ${ENTRY_LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_LINE, "utf8");

console.log(`Wrote ${ENTRY_LINE.length} characters to ${OUTPUT_PATH}`);
