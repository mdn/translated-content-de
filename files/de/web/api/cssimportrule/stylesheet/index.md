---
title: "CSSImportRule: styleSheet-Eigenschaft"
short-title: styleSheet
slug: Web/API/CSSImportRule/styleSheet
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`styleSheet`**-Eigenschaft der
[`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt das durch die
{{cssxref("@import")}}-[@-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) spezifizierte CSS-Stylesheet zurück. Dieses wird in Form eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekts bereitgestellt.

Eine {{cssxref("@import")}}-[@-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) hat immer ein zugeordnetes Stylesheet.

## Wert

Ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet).

## Beispiele

Das folgende Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher wird das erste Element in der Liste der CSS-Regeln eine `CSSImportRule` sein. Die `styleSheet`-Eigenschaft gibt das importierte Stylesheet zurück.

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
