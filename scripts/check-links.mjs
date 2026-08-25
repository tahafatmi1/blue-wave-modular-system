import fs from 'node:fs';
import path from 'node:path';

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

const files = walk('src').filter((file) => file.endsWith('.jsx'));
const source = files.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
const ids = new Set([...source.matchAll(/id="([^"]+)"/g)].map((match) => match[1]));
const links = [...new Set(
  [...source.matchAll(/["']((?:#|https?:\/\/|mailto:|tel:)[^"']*)["']/g)]
    .map((match) => match[1]),
)];

const placeholderLinks = links.filter((link) => link === '#' || link.trim() === '');
const missingTargets = links
  .filter((link) => link.startsWith('#') && link.length > 1)
  .filter((link) => !ids.has(link.slice(1)));
const malformedContacts = links.filter((link) => link === 'mailto:' || link === 'tel:');

console.table(links.map((link) => ({ link, status: 'configured' })));

if (placeholderLinks.length || missingTargets.length || malformedContacts.length) {
  console.error({ placeholderLinks, missingTargets, malformedContacts });
  process.exit(1);
}

console.log(`Checked ${links.length} unique links: all targets are configured.`);
