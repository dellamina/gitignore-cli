import assert from "assert";
import Input from "../lib/input";

describe("Input", function() {
  describe("non interactive", function () {
    it("should store tags and output as they are", async function () {
      let data = {
        tags: ["node", "angular", "android"],
        output: "./out/folder"
      }
      let input = new Input(data.tags, data.output);
      assert.deepEqual(data.tags, await input.getTags());
      assert.deepEqual(data.output, await input.getOutput());
    });
  });

  describe("interactive mode", function () {
    it("should ask the user for tags and output");
  });
});
