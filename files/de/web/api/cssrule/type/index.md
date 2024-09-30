---
title: "CSSRule: type-Eigenschaft"
short-title: type
slug: Web/API/CSSRule/type
l10n:
  sourceCommit: 06dbf9ce9982a3053823c14298fd83fabc6d90d9
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

Die schreibgeschützte **`type`**-Eigenschaft der
[`CSSRule`](/de/docs/Web/API/CSSRule)-Schnittstelle ist eine veraltete Eigenschaft, die eine ganze Zahl zurückgibt, die angibt, welcher Typ von Regel die [`CSSRule`](/de/docs/Web/API/CSSRule) darstellt.

Wenn Sie zwischen verschiedenen Typen von CSS-Regeln unterscheiden müssen, ist eine gute Alternative die Verwendung von [`constructor.name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name):

```js
const sheets = Array.from(document.styleSheets);
const rules = sheets.map((sheet) => Array.from(sheet.cssRules)).flat();

for (const rule of rules) {
  console.log(rule.constructor.name);
}
```

## Wert

- `CSSRule.STYLE_RULE` (`1`)
  - : Die Regel ist eine [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule), die häufigste Art von Regel: `selector { prop1: val1; prop2: val2; }`.
- `CSSRule.IMPORT_RULE` (`3`)
  - : Die Regel ist eine [`CSSImportRule`](/de/docs/Web/API/CSSImportRule) und stellt eine {{cssxref("@import")}}-Regel dar.
- `CSSRule.MEDIA_RULE` (`4`)
  - : Die Regel ist eine [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule).
- `CSSRule.FONT_FACE_RULE` (`5`)
  - : Die Regel ist eine [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule).
- `CSSRule.PAGE_RULE` (`6`)
  - : Die Regel ist eine [`CSSPageRule`](/de/docs/Web/API/CSSPageRule).
- `CSSRule.KEYFRAMES_RULE` (`7`)
  - : Die Regel ist eine [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule).
- `CSSRule.KEYFRAME_RULE` (`8`)
  - : Die Regel ist eine [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule).
- `CSSRule.NAMESPACE_RULE` (`10`)
  - : Die Regel ist eine [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule).
- `CSSRule.COUNTER_STYLE_RULE` (`11`)
  - : Die Regel ist eine [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule).
- `CSSRule.SUPPORTS_RULE` (`12`)
  - : Die Regel ist eine [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule).
- `CSSRule.FONT_FEATURE_VALUES_RULE` (`14`)
  - : Die Regel ist eine [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule).

Die Werte `CSSRule.UNKNOWN_RULE` (`0`), `CSSRule.CHARSET_RULE` (`2`), `CSSRule.DOCUMENT_RULE` (`13`), `CSSRule.VIEWPORT_RULE` (`14`) und `CSSRule.REGION_STYLE_RULE` (`16`) können nicht mehr erlangt werden.

## Beispiele

```js
const rules = document.styleSheets[0].cssRules;
console.log(rules[0].type);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
