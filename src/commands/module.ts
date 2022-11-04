import path from "path";
import fs from "fs";
import inquirer from "inquirer";
import { getDirectories } from "../utils";

export function module(input) {
  console.log(input);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: "question-directory",
    type: "list",
    message: "choose the directory\n ------------------------",
    choices: ["/", ...getDirectories(__dirname + "/src")],
  });

  return console.log(answers["question-directory"]);
}
