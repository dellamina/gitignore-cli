import chalk from "chalk";
import ora from "ora";
import figlet from "figlet";

import Lib from "./lib";
import Input from "./input";

export default class Handler {
  spinner = null;

  run = async options => {
    this.exec(new Lib(), new Input());
  };

  for = async (tags, options) => {
    this.exec(new Lib(), new Input(tags, options.output || process.cwd()));
  };

  exec = async (lib, input) => {
    try {
      console.log(chalk.green(figlet.textSync(".gitignore!")));
      console.log();
      console.log(chalk.green("Generating .gitignore"));

      let tags = await input.getTags();
      tags = this.runStep(
        () => lib.checkTags(tags),
        "Checking available tags",
        "Tags checked"
      );

      let output = await input.getOutput();
      output = this.runStep(
        () => lib.checkOutput(output),
        "Checking output directory",
        "Directory checked"
      );

      await this.runStep(
        () => lib.generate(tags, output),
        "Generating file",
        "File written",
        { async: true }
      );

      this.spinner.succeed("Start coding something AWESOME :)");
    } catch (error) {
      console.error(error.message, error);
      process.exit(1);
    }
  };

  runStep = (fn, pre, succeed, opt) => {
    let result;
    this.spinner = ora(pre).start();
    try {
      if (opt && opt.async) {
        (async () => {
          result = await fn();
        })();
      } else {
        result = fn();
      }
    } catch (error) {
      this.spinner.fail(error.message);
    }
    this.spinner.succeed(succeed);
    return result;
  };
}
