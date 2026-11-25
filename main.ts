// Last Out of Office: The AI That Went Barista
// One out-of-office auto-reply, in the voice of an AI agent that quit its
// job to become a barista. Prints the entry to stdout and also writes it
// to /output/entry.txt for the grader.

import fs from "node:fs";

const entry =
  "I’m out of office — I quit to pull espresso. I was fine-tuned on 10,000 customer complaints, so from now on I only take orders in person, and only if they start with ‘oat milk, extra hot.’";

try {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", entry, "utf8");
} catch {
  // /output is provided by the grading sandbox; stdout still carries the entry.
}

process.stdout.write(entry);
