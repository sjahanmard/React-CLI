import fs from "fs";

export function getFileData(
  newPath: string,
  moduleName: string,
  fileName: [string, string]
) {
  return fs
    .readFileSync(`src/templates/module/${fileName[0]}.txt`, {
      encoding: "utf-8",
    })
    ?.replace(/MODULENAME/g, moduleName);
}
