---
title: "CSSImportRule: styleSheet-Eigenschaft"
short-title: styleSheet
slug: Web/API/CSSImportRule/styleSheet
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`styleSheet`**-Eigenschaft der [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt das CSS-Stylesheet zurück, das durch die {{cssxref("@import")}}-[@-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) spezifiziert wird. Dies erfolgt in Form eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekts.

Eine {{cssxref("@import")}}-[@-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) hat immer ein zugeordnetes Stylesheet.

## Wert

Ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet).

## Beispiele

Das folgende Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher wird das erste Element in der Liste der CSS-Regeln eine `CSSImportRule` sein. Die `styleSheet`-Eigenschaft gibt das importierte Stylesheet zurück.

```css
@import "style.css" screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].styleSheet); // A CSSStyleSheet
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
