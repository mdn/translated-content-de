// @ts-check
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { lint } from "markdownlint/promise";
import rule from "./markdownlint-escape-html.js";

/**
 * @param {string} content
 * @param {Record<string, unknown>} [config]
 */
async function lintString(content, config = {}) {
  const result = await lint({
    strings: { content },
    customRules: [rule],
    config: { default: false, "escape-html": config },
  });
  return result["content"];
}

describe("markdownlint-escape-html rule", async () => {
  it("flags opening and closing HTML tags", async () => {
    const errors = await lintString("Some <b>bold</b> text.");
    assert.equal(errors.length, 2);
    assert.equal(errors[0].errorDetail, "Element: <b>");
    assert.equal(errors[0].errorContext, "<b>");
    assert.equal(errors[1].errorContext, "</b>");
  });

  it("skips non-HTML angle brackets", async () => {
    const errors = await lintString("a < b and b > a");
    assert.equal(errors.length, 0);
  });

  it("reports correct line number for multi-line content", async () => {
    const errors = await lintString("Line one.\n\nSome <b>bold</b>.");
    assert.equal(errors[0].lineNumber, 3);
  });

  describe("allowed_elements", async () => {
    it("skips tags in allowed_elements", async () => {
      const errors = await lintString("Some <b>text</b>.", {
        allowed_elements: ["b"],
      });
      assert.equal(errors.length, 0);
    });

    it("skips tags in allowed_elements (case-insensitive)", async () => {
      const errors = await lintString("<B>text</B>.", {
        allowed_elements: ["b"],
      });
      assert.equal(errors.length, 0);
    });
  });

  describe("span lang handling", async () => {
    it("skips <span lang='...'>...</span>", async () => {
      const errors = await lintString(
        '<span lang="fr">20e Janvier 2016</span>',
      );
      assert.equal(errors.length, 0);
    });

    it("flags <span> without lang attribute", async () => {
      const errors = await lintString("<span>text</span>");
      assert.equal(errors.length, 2);
      assert.equal(errors[0].errorContext, "<span>");
      assert.equal(errors[1].errorContext, "</span>");
    });

    it("handles nested <span lang='...'>", async () => {
      const errors = await lintString(
        '<span lang="de"><span lang="fr">20e Janvier 2016</span></span>',
      );
      assert.equal(errors.length, 0);
    });

    it("flags inner <span> without lang inside <span lang='...'>", async () => {
      const errors = await lintString(
        '<span lang="fr"><span>20e Janvier 2016</span></span>',
      );
      // Inner pair is forbidden; outer pair is allowed.
      assert.equal(errors.length, 2);
      assert.equal(errors[0].errorContext, "<span>");
      assert.equal(errors[1].errorContext, "</span>");
    });
  });

  describe("fixInfo", async () => {
    it("prepends tag in insertText with backslash", async () => {
      const errors = await lintString("<kbd>Enter</kbd>");
      assert.equal(errors.length, 2);
      assert.equal(errors[0].fixInfo?.insertText, "\\<kbd>");
      assert.equal(errors[1].fixInfo?.insertText, "\\</kbd>");
    });

    it("uses the full tag length for deleteCount", async () => {
      const errors = await lintString("<kbd>x</kbd>");
      assert.equal(errors[0].fixInfo?.deleteCount, "<kbd>".length);
      assert.equal(errors[1].fixInfo?.deleteCount, "</kbd>".length);
    });

    it("uses 1-based editColumn", async () => {
      const errors = await lintString("text <em>x</em>");
      // "<" is the 6th character in the line.
      assert.equal(errors[0].fixInfo?.editColumn, 6);
    });
  });
});
