import { cpSync, existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const manifestPath = join(root, '.publish-manifest.json');

if (!existsSync(dist)) {
  console.error('dist/ 不存在，先运行 astro build。');
  process.exit(1);
}

const legacy = ['2024', 'archives', 'categories', 'css', 'js', 'links', 'xml', 'img'];

if (existsSync(manifestPath)) {
  const previous = JSON.parse(readFileSync(manifestPath, 'utf8'));
  for (const name of previous) {
    rmSync(join(root, name), { recursive: true, force: true });
  }
}

for (const name of legacy) {
  rmSync(join(root, name), { recursive: true, force: true });
}

const entries = readdirSync(dist);
for (const name of entries) {
  const target = join(root, name);
  rmSync(target, { recursive: true, force: true });
  cpSync(join(dist, name), target, { recursive: true });
}

writeFileSync(manifestPath, JSON.stringify(entries, null, 2) + '\n');
console.log(`已将 ${entries.length} 个构建产物同步到仓库根目录。`);
