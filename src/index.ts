import { getPath, getName } from "./utils";
import fs from "fs";
import path from "path";
import { createDir } from "./utils/create_dir";
import { createFiles } from "./utils/create_files";

export const fileNames: Array<[string, string]> = [
  ["index", "ts"],
  ["index.module", "tsx"],
  ["index.style", "ts"],
  ["index.utils", "ts"],
];

(async function () {
  const moduleName = getName();
  const modulePath = await getPath();
  const newPath = path.join(modulePath, moduleName);
  createDir(newPath, moduleName);
  createFiles(newPath, moduleName);
  console.log(moduleName + " module has been successfully created!");
})();
