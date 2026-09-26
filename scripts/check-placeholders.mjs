#!/usr/bin/env node
/**
 * Fails the build while any [[TBC:...]] marker remains in src/.
 *
 * Why this exists: illustrative metrics were drafted into resume.ts so the
 * bullets could be reviewed in shape, before the real figures were known. Those
 * numbers are plausible, not true. On a résumé that is a misrepresentation to
 * employers, so it must not be possible to ship one by forgetting.
 *
 * The marker carries the suggested value inline — [[TBC:4]] means "4 is a
 * defensible placeholder, replace it with the real number". Replace the whole
 * marker including brackets, then this check passes and the site can deploy.
 *
 * Wired into CI as its own step so the failure is unmistakable rather than
 * surfacing as a confusing build error.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SRC = join(ROOT, 'src');
const MARKER = /\[\[TBC:([^\]]*)\]\]/g;

/** @param {string} dir @returns {string[]} */
function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const hits = [];
for (const file of walk(SRC)) {
  const text = readFileSync(file, 'utf8');
  text.split('\n').forEach((line, i) => {
    for (const m of line.matchAll(MARKER)) {
      hits.push({ file: relative(ROOT, file), line: i + 1, value: m[1], text: line.trim() });
    }
  });
}

if (hits.length === 0) {
  console.log('check-placeholders: no [[TBC:...]] markers — content is ready to publish.');
  process.exit(0);
}

console.error(
  `\ncheck-placeholders: ${hits.length} unresolved placeholder${hits.length === 1 ? '' : 's'}.\n\n` +
    'These are illustrative values, not facts. Replace each with a real number\n' +
    '(or delete the clause) before this can deploy.\n',
);
for (const h of hits) {
  console.error(`  ${h.file}:${h.line}  suggested: ${h.value}`);
  console.error(`    ${h.text.length > 150 ? `${h.text.slice(0, 150)}…` : h.text}\n`);
}
process.exit(1);
