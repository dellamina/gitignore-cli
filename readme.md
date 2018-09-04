# Gitignore cli

---

[![Build](https://img.shields.io/circleci/project/github/dellamina/gitignore-cli/master.svg)](https://circleci.com/gh/dellamina/workflows/gitignore-cli/tree/master)
[![Version](https://img.shields.io/npm/v/@dellamina/gitignore-cli.svg)](https://www.npmjs.com/package/@dellamina/gitignore-cli)
[![Dependencies](https://img.shields.io/david/dellamina/gitignore-cli.svg)](https://david-dm.org/dellamina/gitignore-cli)
![Size](https://img.shields.io/bundlephobia/minzip/@dellamina/gitignore-cli.svg)
[![License](https://img.shields.io/github/license/dellamina/gitignore-cli.svg)](https://github.com/dellamina/gitignore-cli/blob/master/license)
[![Website](https://img.shields.io/website-up-down-green-red/https/gitignore.netlify.com.svg?label=website)](https://gitignore.netlify.com/)


## Creating .gitignore has never been so easy

`gi` is a cli wrapper for gitignore.io api to generate .gitignore files on the fly, you only need to supply the desired tags (languages, framework, platform, etc) and (optionaly) the output directory (defaults to cwd).

### Installation

You can install this package with `npm i -g @dellamina/gitignore-cli` and then you can run `gi` from everywhere on your pc.

#### Uninstall

If you are not happy you can uninstall with `npm rm -g @dellamina/gitignore-cli`, an issue would be also cool to know why `gi` was not for you :)

### Usage

`gi` has two main commands, `run` is also the default comman if no argument is passed:
* `run` (default) that leverages [inquirer.js](https://github.com/SBoudrias/Inquirer.js/) to get the needed parameters
* `for` that acceps a variable number of arguments to be used as tags and a switch(`-o, --output`) for the destination folder

#### Help

```
Usage: gi [options] [command]

Options:

  -v, --version            output the version number
  -h, --help               output usage information

Commands:

  run                      Generate .gitignore interactively
  for [options] <tags...>  Generate .gitignore from the passed arguments

  Options:

    -o, --output <directory>  output directory
    -h, --help                output usage information

  help                     Show help message
```
