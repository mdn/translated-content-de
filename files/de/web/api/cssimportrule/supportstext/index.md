---
title: "CSSImportRule: supportsText-Eigenschaft"
short-title: supportsText
slug: Web/API/CSSImportRule/supportsText
l10n:
  sourceCommit: 8b1f687ca6125d49d45b62d2ff6b7806a8a24775
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`supportsText`**-Eigenschaft der {{domxref("CSSImportRule")}}-Schnittstelle gibt die Unterstützungsbedingung zurück, die durch die {{cssxref("@import")}} [at-rule](/de/docs/Web/CSS/At-rule) angegeben wurde.

## Wert

Ein String oder `null`.

## Beispiele

Das einzelne Stylesheet des Dokuments enthält drei {{cssxref("@import")}}-Regeln. Die erste Deklaration importiert ein Stylesheet, wenn `display: flex` unterstützt wird. Die zweite Deklaration importiert ein Stylesheet, wenn der `:has`-Selektor unterstützt wird. Die dritte Deklaration importiert ein Stylesheet ohne eine Unterstützungsbedingung.

Die `supportsText`-Eigenschaft gibt die Importbedingungen zurück, die mit der at-rule verbunden sind.

```css
@import url("style1.css") supports(display: flex);
@import url("style2.css") supports(selector(p:has(a)));
@import url("style3.css");
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].supportsText); // gibt `"display: flex"` zurück
console.log(myRules[1].supportsText); // gibt `"selector(p:has(a))"` zurück
console.log(myRules[2].supportsText); // gibt `null` zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- {{cssxref("@import")}} und {{cssxref("@supports")}}
