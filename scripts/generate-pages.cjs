const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const html = fs.readFileSync(path.join(dist, "index.html"));
const source = fs.readFileSync(path.join(root, "src", "data.ts"), "utf8");
const slugs = [...source.matchAll(/^\s*slug:\s*["']([a-z0-9-]+)["']/gm)].map(
  (match) => match[1]
);

if (slugs.length === 0) {
  throw new Error("No project slugs found; route pages were not generated.");
}

const routes = [
  "projects",
  "about",
  "experience",
  "resume",
  "contact",
  ...slugs.map((slug) => `projects/${slug}`),
];

for (const route of routes) {
  const directory = path.join(dist, route);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), html);
}

fs.writeFileSync(path.join(dist, "404.html"), html);
