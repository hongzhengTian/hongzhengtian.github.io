const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const failures = [];

const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");
const exists = (relativePath) => fs.existsSync(path.join(root, relativePath));
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const packageJson = JSON.parse(read("package.json"));
const scripts = packageJson.scripts || {};

for (const forbiddenScript of ["build:css", "build:tailwind", "build:tailwind:watch"]) {
  if (Object.prototype.hasOwnProperty.call(scripts, forbiddenScript)) {
    failures.push(`package.json must not define \`${forbiddenScript}\`; CSS build ownership belongs to the al-folio gems.`);
  }
}

const config = read("_config.yml");
const requiredConfigPatterns = [
  [/^\s*theme:\s*al_folio_core\s*$/m, "_config.yml must keep theme: al_folio_core."],
  [/^\s*-\s*al_folio_core\s*$/m, "_config.yml plugins must include al_folio_core."],
  [/^\s*-\s*al_folio_distill\s*$/m, "_config.yml plugins must include al_folio_distill."],
  [/^\s*-\s*al_cookie\s*$/m, "_config.yml plugins must include al_cookie."],
  [/^\s*-\s*al_icons\s*$/m, "_config.yml plugins must include al_icons."],
  [/^\s*-\s*al_math\s*$/m, "_config.yml plugins must include al_math."],
];

for (const [pattern, message] of requiredConfigPatterns) {
  if (!pattern.test(config)) failures.push(message);
}

for (const libraryKey of ["fontawesome", "academicons", "scholar-icons"]) {
  if (!new RegExp(`^\\s{2}${escapeRegExp(libraryKey)}:\\s*$`, "m").test(config)) {
    failures.push(`_config.yml must define third_party_libraries.${libraryKey}.`);
  }
}

const gemfile = read("Gemfile");
if (!/gem 'al_folio_core', '= 1\.0\.11'/.test(gemfile)) {
  failures.push("Gemfile must keep al_folio_core pinned to 1.0.11.");
}
if (!/gem 'al_math', '= 1\.0\.1'/.test(gemfile)) {
  failures.push("Gemfile must keep al_math pinned to 1.0.1.");
}

for (const forbiddenPath of ["_includes", "_layouts", "_sass", "_scripts", "assets/tailwind", "tailwind.config.js", "assets/webfonts"]) {
  if (exists(forbiddenPath)) {
    failures.push(`The personal-site starter must not own plugin runtime path: ${forbiddenPath}.`);
  }
}

const requiredFiles = [
  "_pages/about.md",
  "_pages/projects.md",
  "_pages/publications.md",
  "_pages/experience.md",
  "_pages/cv.md",
  "_pages/photography.md",
  "_bibliography/papers.bib",
  "_data/socials.yml",
  "assets/img/prof_pic.jpg",
  "assets/pdf/HongzhengTian_CV.pdf",
];

for (const requiredFile of requiredFiles) {
  if (!exists(requiredFile)) failures.push(`Required personal-site file is missing: ${requiredFile}.`);
}

const routeContracts = new Map([
  ["_pages/about.md", "/"],
  ["_pages/projects.md", "/research/"],
  ["_pages/publications.md", "/publications/"],
  ["_pages/experience.md", "/experience/"],
  ["_pages/cv.md", "/cv/"],
  ["_pages/photography.md", "/photography/"],
]);

for (const [page, permalink] of routeContracts) {
  const contents = read(page);
  const frontMatter = contents.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!frontMatter) {
    failures.push(`${page} must start with closed YAML front matter.`);
    continue;
  }

  const permalinkPattern = new RegExp(`^permalink:\\s*${escapeRegExp(permalink)}\\s*$`, "m");
  if (!permalinkPattern.test(frontMatter[1])) {
    failures.push(`${page} must keep its public permalink ${permalink}.`);
  }
}

if (failures.length > 0) {
  console.error("Site style contract check failed:");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log("Site style contract check passed.");
