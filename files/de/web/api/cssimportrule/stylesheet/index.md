---
title: "CSSImportRule: styleSheet-Eigenschaft"
short-title: styleSheet
slug: Web/API/CSSImportRule/styleSheet
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`styleSheet`**-Eigenschaft der
[`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt das durch den
{{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) spezifizierte CSS-Stylesheet zurück. Dies erfolgt in Form eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekts.

Eine {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) hat immer ein zugehöriges Stylesheet.

## Wert

Ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet).

## Beispiele

Das folgende Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher wird das
erste Element in der Liste der CSS-Regeln ein `CSSImportRule` sein. Die
`styleSheet`-Eigenschaft gibt das importierte Stylesheet zurück.

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].styleSheet); // A CSSStyleSheet
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
