#!/usr/bin/env node

/**
 * shebang line for nix systems, npm will take care of making it work on windows
 */

import program from "commander";
import * as pkg from "../package.json";
import Handler from "./handler";

program.name("gi").version(pkg.version, "-v, --version");

program
  .command("run")
  .description("Generate .gitignore interactively")
  .action(new Handler().run);

program
  .command("for <tags...>")
  .description("Generate .gitignore from the passed arguments")
  .option("-o, --output <directory>", "output directory")
  .action(new Handler().for);

program
  .command("help")
  .description("Show help message")
  .action(() => program.help());

program.parse(process.argv);

if (program.args.length === 0) new Handler().run();
