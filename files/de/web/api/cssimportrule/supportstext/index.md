---
title: "CSSImportRule: supportsText-Eigenschaft"
short-title: supportsText
slug: Web/API/CSSImportRule/supportsText
l10n:
  sourceCommit: 8b1f687ca6125d49d45b62d2ff6b7806a8a24775
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`supportsText`**-Eigenschaft des [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Interfaces gibt die Supports-Bedingung zurück, die durch die {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/At-rule) angegeben wird.

## Wert

Ein String oder `null`.

## Beispiele

Das Stylesheet des Dokuments enthält drei {{cssxref("@import")}}-Regeln. Die erste Deklaration importiert ein Stylesheet, wenn `display: flex` unterstützt wird. Die zweite Deklaration importiert ein Stylesheet, wenn der `:has`-Selektor unterstützt wird. Die dritte Deklaration importiert ein Stylesheet ohne eine Supports-Bedingung.

Die `supportsText`-Eigenschaft gibt die Importbedingungen zurück, die mit der At-Regel verbunden sind.

```css
@import url("style1.css") supports(display: flex);
@import url("style2.css") supports(selector(p:has(a)));
@import url("style3.css");
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

- [Verwendung von Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- {{cssxref("@import")}} und {{cssxref("@supports")}}
