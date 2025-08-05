---
title: "CSSImportRule: supportsText-Eigenschaft"
short-title: supportsText
slug: Web/API/CSSImportRule/supportsText
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`supportsText`**-Eigenschaft des [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Interfaces gibt die Support-Bedingung zurück, die durch die {{cssxref("@import")}}-[@-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) angegeben ist.

## Wert

Ein String oder `null`.

## Beispiele

Das einzige Stylesheet des Dokuments enthält drei {{cssxref("@import")}}-Regeln. Die erste Deklaration importiert ein Stylesheet, wenn `display: flex` unterstützt wird. Die zweite Deklaration importiert ein Stylesheet, wenn der `:has`-Selektor unterstützt wird. Die dritte Deklaration importiert ein Stylesheet ohne eine Support-Bedingung.

Die `supportsText`-Eigenschaft gibt die Importbedingungen zurück, die mit der @-Regel verknüpft sind.

```css
@import "style1.css" supports(display: flex);
@import "style2.css" supports(selector(p:has(a)));
@import "style3.css";
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].supportsText); // returns `"display: flex"`
console.log(myRules[1].supportsText); // returns `"selector(p:has(a))"`
console.log(myRules[2].supportsText); // returns `null`
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- {{cssxref("@import")}} und {{cssxref("@supports")}}
