import { mkdirSync, writeFileSync } from "node:fs";

// One haiku about debugging, three lines in 5-7-5:
//   Line 1 (5): Cursor(2) blinks(1) at(1) three(1)
//   Line 2 (7): the(1) break-point(2) holds(1) its(1) breath(1) still(1)
//   Line 3 (5): logs(1) name(1) my(1) ty-po(2)
const HAIKU = [
  "Cursor blinks at three —",
  "the breakpoint holds its breath, still",
  "logs name my typo.",
].join("\n") + "\n";

if (HAIKU.length > 200) {
  throw new Error(`Haiku is ${HAIKU.length} characters, over the 200 limit.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
