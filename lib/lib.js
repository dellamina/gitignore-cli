import fs from "fs";
import path from "path";
import axios from "axios";
import types from "./types";

export default class Lib {
  gitignoreApi = "https://www.gitignore.io/api/";

  checkTags = tags => {
    tags = tags ? tags.filter(t => types.includes(t)) : undefined;
    if (tags == undefined || tags.length == 0) {
      throw new Error(
        `Error: no supported tags has been provided. (Have a look at ${
          this.gitignoreApi
        }list for a complete list of supported tags.)`
      );
    }
    return tags;
  };

  checkOutput = output => {
    if (!fs.existsSync(output) || !fs.lstatSync(output).isDirectory()) {
      throw new Error(`Error: the output directory ${output} does not exists.`);
    }
    return output;
  };

  generate = async (tags, dir) => {
    try {
      let response = await axios.get(this.gitignoreApi + tags.join(","));
      if (!dir.endsWith(path.sep)) dir = dir + path.sep;
      fs.writeFileSync(`${dir}.gitignore`, response.data);
    } catch (error) {
      throw new Error("Could not write file :(");
    }
  };
}
