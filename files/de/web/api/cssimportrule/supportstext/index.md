---
title: "CSSImportRule: supportsText-Eigenschaft"
short-title: supportsText
slug: Web/API/CSSImportRule/supportsText
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`supportsText`**-Eigenschaft der [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt die Unterstützungsbedingung zurück, die durch die {{cssxref("@import")}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) spezifiziert ist.

## Wert

Ein String oder `null`.

## Beispiele

Das einzelne Stylesheet des Dokuments enthält drei {{cssxref("@import")}}-Regeln. Die erste Deklaration importiert ein Stylesheet, wenn `display: flex` unterstützt wird. Die zweite Deklaration importiert ein Stylesheet, wenn der `:has`-Selektor unterstützt wird. Die dritte Deklaration importiert ein Stylesheet ohne eine Unterstützungsbedingung.

Die `supportsText`-Eigenschaft gibt die Importbedingungen zurück, die mit der At-Regel verknüpft sind.

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
