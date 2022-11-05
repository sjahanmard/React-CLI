import fs from "fs";
import { fileNames } from "../config";
import { getFileData } from "./get_file_data";

export function createFiles(newPath: string, moduleName: string) {
  for (let fileName of fileNames) {
    const data = getFileData(newPath, moduleName, fileName);
    fs.writeFileSync(newPath + "/" + fileName[0] + "." + fileName[1], data);
  }
}
