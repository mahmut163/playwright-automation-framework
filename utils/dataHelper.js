
import fs from 'fs';

export function loadTestData(filename) {
  const raw = fs.readFileSync(`./data/${filename}`, 'utf-8');
  return JSON.parse(raw);
}
