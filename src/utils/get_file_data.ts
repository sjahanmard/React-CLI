import fs from "fs";
import { templatesPath } from "..";

export function getFileData(
  newPath: string,
  moduleName: string,
  fileName: [string, string]
) {
  return fs
    .readFileSync(templatesPath + `/module/${fileName[0]}.txt`, {
      encoding: "utf-8",
    })
    ?.replace(/MODULENAME/g, moduleName);
}
