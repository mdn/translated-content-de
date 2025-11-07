---
title: "CSSImportRule: supportsText-Eigenschaft"
short-title: supportsText
slug: Web/API/CSSImportRule/supportsText
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`supportsText`**-Eigenschaft der [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt die in der {{cssxref("@import")}}-[@-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) angegebene Bedingungen zurück.

## Wert

Ein String oder `null`.

## Beispiele

Das einzelne Stylesheet des Dokuments enthält drei {{cssxref("@import")}}-Regeln. Die erste Anweisung importiert ein Stylesheet, wenn `display: flex` unterstützt wird. Die zweite Anweisung importiert ein Stylesheet, wenn der `:has`-Selektor unterstützt wird. Die dritte Anweisung importiert ein Stylesheet ohne eine Bedingung.

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

- [Verwendung von Feature-Anfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- {{cssxref("@import")}} und {{cssxref("@supports")}}
