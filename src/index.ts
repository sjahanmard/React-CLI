#!/usr/bin/env node

import { getPath, getName } from "./utils";
import { createDir } from "./utils/create_dir";
import { createFiles } from "./utils/create_files";
import path from "path";

export const templatesPath = path.join(__dirname, "../templates");

(async function () {
  const moduleName = getName();
  const modulePath = await getPath();
  const newPath = path.join(modulePath, moduleName);
  createDir(newPath, moduleName);
  createFiles(newPath, moduleName);
  console.log(moduleName + " module has been successfully created!");
})();
