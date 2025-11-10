---
title: "CSSImportRule: supportsText-Eigenschaft"
short-title: supportsText
slug: Web/API/CSSImportRule/supportsText
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`supportsText`**-Eigenschaft der [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt die Unterstützungsbedingung zurück, die durch die {{cssxref("@import")}}-[@-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) angegeben wird.

## Wert

Ein String oder `null`.

## Beispiele

Das Stylesheet des Dokuments enthält drei {{cssxref("@import")}}-Regeln. Die erste Deklaration importiert ein Stylesheet, wenn `display: flex` unterstützt wird. Die zweite Deklaration importiert ein Stylesheet, wenn der `:has`-Selektor unterstützt wird. Die dritte Deklaration importiert ein Stylesheet ohne eine Unterstützungsbedingung.

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

- [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- {{cssxref("@import")}} und {{cssxref("@supports")}}
