import assert from "assert";
import Lib from "../lib/lib";

describe("Lib", function () {
  beforeEach(async function() {
    this.lib = new Lib();
  });

  describe("#checkTags()", function () {
    it("should validate ok for node", function () {
      let data = ["node"];
      assert.deepEqual(data, this.lib.checkTags(data));
    });

    it("should blow up xyz", function () {
      let data = ["xyz"];
      assert.throws(() => this.lib.checkTags(data));
    });

    it("should handle multiple arguments", function () {
      let data = ["node", "angular", "android"];
      assert.deepEqual(data, this.lib.checkTags(data));
    });
  });

  describe("#checkOutput()", function () {
    it("should validate ok for `cwd`", function () {
      let data = process.cwd();
      assert.deepEqual(data, this.lib.checkOutput(data));
    });

    it("should blow up xyz", function () {
      let data = ["xyz"];
      assert.throws(() => this.lib.checkOutput(data));
    });
  });

  describe("#generate()", function () {
    it("should generate ok for node in test directory", async function () {
      let tags = ["node"];
      let output = "./test";
      assert.doesNotThrow(async () => await this.lib.generate(tags, output));
    });

    it("should blow up for xyz in xyz directory", async function () {
      let tags = ["xyz"];
      let output = "xyz";
      await assert.rejects(this.lib.generate(tags, output));
    });
  });
});
