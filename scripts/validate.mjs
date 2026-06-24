#!/usr/bin/env node
// Validates every patterns/apps/*/APP.md.
//
// Checks:
//   - front matter is present and contains: version, app, archetype
//   - the required sections are present: ## Structure, ## Obstacles, ## Skip
//
// Exits non-zero (with a readable report) on any problem, so it can gate CI.

import { readdir, readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, "..");
const appsDir = join(repoRoot, "patterns", "apps");

const REQUIRED_FRONTMATTER = ["version", "app", "archetype"];
const REQUIRED_SECTIONS = ["Structure", "Obstacles", "Skip"];

// Parse the leading front-matter block into a flat field map.
function parseFrontMatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const map = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
    if (m) map[m[1]] = m[2].trim();
  }
  return map;
}

// Collect "## <Section>" headings present in the body.
function sectionHeadings(text) {
  const headings = new Set();
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^##\s+([^\n#].*?)\s*$/);
    if (m) headings.add(m[1].trim());
  }
  return headings;
}

async function findAppFiles(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await findAppFiles(full)));
    } else if (entry.name === "APP.md") {
      out.push(full);
    }
  }
  return out;
}

async function validateFile(file) {
  const problems = [];
  const text = await readFile(file, "utf8");

  const fm = parseFrontMatter(text);
  if (!fm) {
    problems.push("missing front matter (expected a leading --- block)");
  } else {
    for (const field of REQUIRED_FRONTMATTER) {
      if (!(field in fm) || fm[field] === "") {
        problems.push(`front matter missing required field: ${field}`);
      }
    }
  }

  const headings = sectionHeadings(text);
  for (const section of REQUIRED_SECTIONS) {
    if (!headings.has(section)) {
      problems.push(`missing required section: ## ${section}`);
    }
  }

  return problems;
}

async function main() {
  try {
    const s = await stat(appsDir);
    if (!s.isDirectory()) throw new Error("not a directory");
  } catch {
    console.error(`x patterns/apps directory not found at ${appsDir}`);
    process.exit(1);
  }

  const files = await findAppFiles(appsDir);
  if (files.length === 0) {
    console.error("x no patterns/apps/*/APP.md files found to validate");
    process.exit(1);
  }

  let failed = 0;
  for (const file of files.sort()) {
    const rel = file.slice(repoRoot.length + 1);
    const problems = await validateFile(file);
    if (problems.length === 0) {
      console.log(`ok ${rel}`);
    } else {
      failed++;
      console.log(`FAIL ${rel}`);
      for (const p of problems) console.log(`    - ${p}`);
    }
  }

  console.log("");
  if (failed > 0) {
    console.error(`x ${failed} of ${files.length} APP.md file(s) failed validation`);
    process.exit(1);
  }
  console.log(`ok all ${files.length} APP.md file(s) valid`);
}

main().catch((err) => {
  console.error(`x validator crashed: ${err?.message ?? err}`);
  process.exit(1);
});
