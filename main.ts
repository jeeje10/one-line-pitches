// A Day of One-Line Pitches — make.fun entry.
// Writes one sentence (at most 240 characters) to /output/entry.txt:
// the pitch that would convince a friend who has never coded to let an
// AI agent build their first app idea on make.fun. The pitch leads with
// the concrete payoff (a working version to tap and show friends), keeps
// the risk at zero (free to try, nothing lost but an afternoon), and
// stays in plain words a non-coder reads once and gets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Describe your app idea in plain words, and an AI agent builds a working version you can tap and show your friends — free to try, and if it is not what you imagined, you have lost nothing but an afternoon.";

// Gate guard: the entry must be 1–240 characters and not only whitespace.
if (entry.length < 1 || entry.length > 240 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-240`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
