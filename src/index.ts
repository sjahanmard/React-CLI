#!/usr/bin/env node

import { getPath, getName } from "./utils";
import { createDir } from "./utils/create_dir";
import { createFiles } from "./utils/create_files";
import path from "path";

export const templatesPath = path.join(__dirname, "../templates");

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
