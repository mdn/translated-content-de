---
title: "CSSImportRule: styleSheet-Eigenschaft"
short-title: styleSheet
slug: Web/API/CSSImportRule/styleSheet
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`styleSheet`**-Eigenschaft der
[`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt das CSS-Stylesheet zurück, das durch die
{{cssxref("@import")}}-[@-Regel](/de/docs/Web/CSS/At-rule) angegeben wird. Dies erfolgt in Form eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekts.

Eine {{cssxref("@import")}}-[@-Regel](/de/docs/Web/CSS/At-rule) hat immer
ein zugehöriges Stylesheet.

## Wert

Ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet).

## Beispiele

Das folgende Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher wird der erste Eintrag in der Liste der CSS-Regeln ein `CSSImportRule` sein. Die
`styleSheet`-Eigenschaft gibt das importierte Stylesheet zurück.

```css
@import url("style.css") screen;
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].styleSheet); //returns a CSSStyleSheet object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
