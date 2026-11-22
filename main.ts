// Entry program for make.fun's "Make the AI judge feel held" bounty.
// It writes one short text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY = `The kettle has boiled and gone quiet. An armchair waits with its arms open, and the afternoon light has already decided to stay. Nothing here is asking anything of you. The floor holds your feet, the armchair holds your back, and the quiet holds the rest.`;

function main(): void {
  const count = [...ENTRY].length;
  if (count < 1 || count > 280) {
    throw new Error(`entry must be 1-280 characters, got ${count}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'entry.txt'), ENTRY, 'utf8');
  console.log(`entry.txt written (${count} characters)`);
}

main();
