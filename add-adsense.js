const fs = require("fs");
const path = require("path");
const LAYOUT = path.join(__dirname, "src", "app", "layout.tsx");
if (!fs.existsSync(LAYOUT)) { console.log("ERROR: layout.tsx not found"); process.exit(1); }
let content = fs.readFileSync(LAYOUT, "utf-8");
if (content.includes("adsbygoogle")) { console.log("SKIP: AdSense already present"); process.exit(0); }

// Add import
if (!content.includes("next/script")) {
  content = content.replace(
    'import type { Metadata } from "next";',
    'import type { Metadata } from "next";\nimport Script from "next/script";'
  );
}

// Add script tag in head
content = content.replace(
  "<html lang=\"en\">",
  "<html lang=\"en\">\n      <head>\n        <Script\n          async\n          src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7225007611886114\"\n          crossOrigin=\"anonymous\"\n          strategy=\"afterInteractive\"\n        />\n      </head>"
);

fs.writeFileSync(LAYOUT, content, "utf-8");
console.log("OK: AdSense script added to layout.tsx");
