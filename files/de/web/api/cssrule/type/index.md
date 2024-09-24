---
title: "CSSRule: type-Eigenschaft"
short-title: type
slug: Web/API/CSSRule/type
l10n:
  sourceCommit: 06dbf9ce9982a3053823c14298fd83fabc6d90d9
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

Die schreibgeschützte **`type`**-Eigenschaft des
{{domxref("CSSRule")}}-Interfaces ist eine veraltete Eigenschaft, die eine Ganzzahl zurückgibt, die angibt, welchen Typ von Regel die {{domxref("CSSRule")}} darstellt.

Wenn Sie verschiedene Arten von CSS-Regeln unterscheiden müssen, ist eine gute Alternative die Verwendung von [`constructor.name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name):

```js
const sheets = Array.from(document.styleSheets);
const rules = sheets.map((sheet) => Array.from(sheet.cssRules)).flat();

for (const rule of rules) {
  console.log(rule.constructor.name);
}
```

## Wert

- `CSSRule.STYLE_RULE` (`1`)
  - : Die Regel ist eine {{domxref("CSSStyleRule")}}, die häufigste Art von Regel: `selector { prop1: val1; prop2: val2; }`.
- `CSSRule.IMPORT_RULE` (`3`)
  - : Die Regel ist eine {{domxref("CSSImportRule")}} und stellt eine {{cssxref("@import")}}-Regel dar.
- `CSSRule.MEDIA_RULE` (`4`)
  - : Die Regel ist eine {{domxref("CSSMediaRule")}}.
- `CSSRule.FONT_FACE_RULE` (`5`)
  - : Die Regel ist eine {{domxref("CSSFontFaceRule")}}.
- `CSSRule.PAGE_RULE` (`6`)
  - : Die Regel ist eine {{domxref("CSSPageRule")}}.
- `CSSRule.KEYFRAMES_RULE` (`7`)
  - : Die Regel ist eine {{domxref("CSSKeyframesRule")}}.
- `CSSRule.KEYFRAME_RULE` (`8`)
  - : Die Regel ist eine {{domxref("CSSKeyframeRule")}}.
- `CSSRule.NAMESPACE_RULE` (`10`)
  - : Die Regel ist eine {{domxref("CSSNamespaceRule")}}.
- `CSSRule.COUNTER_STYLE_RULE` (`11`)
  - : Die Regel ist eine {{domxref("CSSCounterStyleRule")}}.
- `CSSRule.SUPPORTS_RULE` (`12`)
  - : Die Regel ist eine {{domxref("CSSSupportsRule")}}.
- `CSSRule.FONT_FEATURE_VALUES_RULE` (`14`)
  - : Die Regel ist eine {{domxref("CSSFontFeatureValuesRule")}}.

Die Werte `CSSRule.UNKNOWN_RULE` (`0`), `CSSRule.CHARSET_RULE` (`2`), `CSSRule.DOCUMENT_RULE` (`13`), `CSSRule.VIEWPORT_RULE` (`14`) und `CSSRule.REGION_STYLE_RULE` (`16`) können nicht mehr abgerufen werden.

## Beispiele

```js
const rules = document.styleSheets[0].cssRules;
console.log(rules[0].type);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
