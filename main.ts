import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

try {
  const source = await readFile(new URL('./entry.png', import.meta.url)).catch((error) => {
    if (error.code === 'ENOENT') throw new Error('source entry.png is missing next to main.ts');
    throw error;
  });
  if (!source.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) {
    throw new Error('source entry.png is not a JPEG (expected FF D8 FF magic bytes)');
  }
  const sourceHash = sha256(source);

  const directory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  await mkdir(directory, { recursive: true });
  const destination = join(directory, 'entry.png');
  await writeFile(destination, source);
  const written = await readFile(destination);
  if (sha256(written) !== sourceHash) {
    throw new Error('written entry.png SHA-256 does not match the source');
  }
  console.log(`Verified ${destination}: ${written.length} bytes written, sha256 ${sourceHash}`);
} catch (error) {
  console.error(`Failed to write entry.png: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}
