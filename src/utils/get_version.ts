import fs from "fs";
import path from "path";

export function getVersion(path: string) {
  if (process.argv[2] === "--version" || process.argv[2] === "-v") {
    let version = JSON.parse(fs.readFileSync(path, "utf8"))?.version;
    console.log(version);
    process.exit(1);
  }
}
