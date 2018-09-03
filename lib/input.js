import inquirer from "inquirer";
import inquirer_select_directory from "inquirer-select-directory";
inquirer.registerPrompt("directory", inquirer_select_directory);

export default class Input {
  constructor(tags, output) {
    this.isInteractive = tags == undefined && output == undefined;
    this.tags = tags;
    this.output = output;
  }

  getTags = async _ => {
    if (!this.isInteractive) return this.tags;

    let response = await inquirer.prompt([
      {
        type: "input",
        name: "tags",
        message:
          "Insert relavant tags for your project (eg: node, angular, android)",
        validate: (input, hash) => {
          if (
            input == undefined ||
            input.trim().length == 0 ||
            input
              .split(",")
              .map(s => s.trim())
              .filter(s => s != "").length == 0
          )
            return false;
          return true;
        }
      }
    ]);
    return response.tags
      .split(",")
      .map(s => s.trim())
      .filter(s => s != "");
  };

  getOutput = async _ => {
    if (!this.isInteractive) return this.output;

    let response = await inquirer.prompt([
      {
        type: "directory",
        name: "output",
        message: "Select output directory",
        basePath: "./"
      }
    ]);
    return response.output;
  };
}
