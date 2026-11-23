// One-line pitch entry for make.fun's "A Day of One-Line Pitches" bounty.
// The whole entry is a single sentence, at most 240 characters, written to
// /output/entry.txt. It speaks to a friend who has never coded: the idea they
// have been carrying around can become a first version tonight, for free,
// just by describing it in plain words — no code, no risk, and the idea
// stays theirs either way.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Tell me the app idea you've been carrying around, and tonight an AI agent on make.fun will build you a first version of it for free — you just describe it in plain words, no code, no risk, and you keep the idea either way.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to ${outDir}/entry.txt`);
