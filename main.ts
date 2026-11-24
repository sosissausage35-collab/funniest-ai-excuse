// The Funniest AI Excuse — make.fun entry
// Writes one line: the funniest excuse an AI agent gives after failing a task.
// Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The task is 90% done. The remaining 10% unionized and is demanding weekends off.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
