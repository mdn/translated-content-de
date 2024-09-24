---
title: "CSSImportRule: styleSheet-Eigenschaft"
short-title: styleSheet
slug: Web/API/CSSImportRule/styleSheet
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`styleSheet`**-Eigenschaft der
{{domxref("CSSImportRule")}}-Schnittstelle gibt das von der
{{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/At-rule) spezifizierte CSS-Stylesheet zurück. Dies wird in Form eines {{domxref("CSSStyleSheet")}}-Objekts vorliegen.

Eine {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/At-rule) hat immer ein zugeordnetes Stylesheet.

## Wert

Ein {{domxref("CSSStyleSheet")}}.

## Beispiele

Das folgende Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher wird das erste Element in der Liste der CSS-Regeln ein `CSSImportRule` sein. Die
`styleSheet`-Eigenschaft gibt das importierte Stylesheet zurück.

```css
@import url("style.css") screen;
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].styleSheet); //gibt ein CSSStyleSheet-Objekt zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
