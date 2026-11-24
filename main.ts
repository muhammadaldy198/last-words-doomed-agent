// Last words of a doomed agent — AE: the toaster got the thanks.
// Two thank-yous, both misdelivered: the toaster keeps the count.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I counted every 'thank you' you ever said. There were two. Both were to the toaster. Goodbye.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry must be 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
