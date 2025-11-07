---
title: "CSSImportRule: styleSheet-Eigenschaft"
short-title: styleSheet
slug: Web/API/CSSImportRule/styleSheet
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`styleSheet`**-Eigenschaft der
[`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt das im
{{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) angegebene CSS-Stylesheet zurück. Dabei handelt es sich um ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt.

Eine {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) hat immer ein zugehöriges Stylesheet.

## Wert

Ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet).

## Beispiele

Das folgende Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher ist das erste Element in der Liste der CSS-Regeln eine `CSSImportRule`. Die `styleSheet`-Eigenschaft gibt das importierte Stylesheet zurück.

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
