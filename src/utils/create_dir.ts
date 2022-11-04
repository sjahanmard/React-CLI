import fs from "fs";
export function createDir(newPath: string, moduleName: string) {
  if (fs.existsSync(newPath)) {
    console.log(
      `There is already a folder named ${moduleName} in this directory`
    );
    process.exit(1);
  }

  fs.mkdir(newPath, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
