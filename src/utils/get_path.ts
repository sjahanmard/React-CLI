import { fileURLToPath } from "url";
import path from "path";
import { getDirectories } from "./get_directories";
import inquirer from "inquirer";

let finalPath = process.cwd() + "/src";

export async function getPath(path: string = finalPath): Promise<string> {
  const answers = await inquirer.prompt({
    name: "question-directory",
    type: "list",
    message: "choose the directory\n ------------------------",
    choices: ["/", ...getDirectories(path)],
  });
  if (answers["question-directory"] === "/") return finalPath;
  finalPath = finalPath + "/" + answers["question-directory"];
  return getPath(finalPath);
}