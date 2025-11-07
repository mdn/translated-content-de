---
title: "CSSImportRule: styleSheet-Eigenschaft"
short-title: styleSheet
slug: Web/API/CSSImportRule/styleSheet
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`styleSheet`**-Eigenschaft der
[`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt das CSS-Stylesheet zurück, das durch die
{{cssxref("@import")}}- [Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) angegeben wird. Dieses wird in der Form eines
[`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekts vorliegen.

Eine {{cssxref("@import")}}- [Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) hat immer ein zugehöriges Stylesheet.

## Wert

Ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet).

## Beispiele

Das folgende Stylesheet enthält eine einzige {{cssxref("@import")}}-Regel. Daher wird der erste Eintrag in der Liste der CSS-Regeln eine `CSSImportRule` sein. Die
`styleSheet`-Eigenschaft gibt das importierte Stylesheet zurück.

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
