// @ts-check
import { createRequire } from "node:module";

// markdownlint/helpers/micromark-helpers.cjs isn't in exports map.
const requireMarkdownlintHelper = createRequire(
  import.meta.resolve("markdownlint/helpers"),
);
const { filterByTypes, getHtmlTagInfo } = requireMarkdownlintHelper(
  "./micromark-helpers.cjs",
);

/** @type {import("markdownlint").Rule} */
export default {
  names: ["escape-html"],
  description: "Disallowed HTML elements should be escaped",
  tags: ["html"],
  parser: "micromark",
  function: (params, onError) => {
    const config = params.config || {};
    const allowedElements = Array.isArray(config.allowed_elements)
      ? config.allowed_elements.map((/** @type {unknown} */ e) =>
          String(e).toLowerCase(),
        )
      : [];

    // Track open <span lang="..."> tags so their closing </span> can be skipped.
    // A stack is used to handle nesting: true = has lang, false = no lang.
    const spanStack = /** @type {boolean[]} */ ([]);

    for (const token of filterByTypes(params.parsers.micromark.tokens, [
      "htmlText",
    ])) {
      const tagInfo = getHtmlTagInfo(token);
      if (!tagInfo) {
        continue;
      }

      // Skip allowed elements.
      if (allowedElements.includes(tagInfo.name.toLowerCase())) {
        continue;
      }

      // Allow <span lang="...">...</span> (e.g. French literal text in translations).
      // A </span> is only skipped when it closes a <span lang="...">.
      if (tagInfo.name.toLowerCase() === "span") {
        if (!tagInfo.close) {
          const hasLang = /\blang\s*=/i.test(token.text);
          spanStack.push(hasLang);
          if (hasLang) {
            continue;
          }
        } else {
          const closesSpanWithLang = spanStack.pop();
          if (closesSpanWithLang) {
            continue;
          }
        }
      }

      const tagText = token.text;

      onError({
        lineNumber: token.startLine,
        detail: `Element: <${tagInfo.name}>`,
        context: tagText,
        range: [token.startColumn, tagText.length],
        fixInfo: {
          editColumn: token.startColumn,
          deleteCount: tagText.length,
          insertText: `\\${tagText}`,
        },
      });
    }
  },
};
