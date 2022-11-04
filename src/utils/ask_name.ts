import { fileURLToPath } from "url";
import path from "path";
import { getDirectories } from "./get_directories";
import inquirer from "inquirer";

export async function askName() {
  const answers = await inquirer.prompt({
    name: "question-directory",
    type: "list",
    message: "choose the directory\n ------------------------",
    choices: ["/", ...getDirectories(process.cwd() + "/src")],
  });
  return console.log(answers["question-directory"]);
}
