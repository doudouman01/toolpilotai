const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "public");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "ads.txt"), "google.com, pub-7225007611886114, DIRECT, f08c47fec0942fa0\n", "utf-8");
console.log("OK: public/ads.txt created");
