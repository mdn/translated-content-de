---
title: "CSSImportRule: href-Eigenschaft"
short-title: href
slug: Web/API/CSSImportRule/href
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`href`**-Eigenschaft der [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt die im {{cssxref("@import")}} [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) angegebene URL zurück.

Die aufgelöste URL wird der [`href`](/de/docs/Web/HTML/Element/link#href)-Attributwert des zugehörigen Stylesheets sein.

## Wert

Ein String.

## Beispiele

Das folgende Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher wird das erste Element in der Liste der CSS-Regeln eine `CSSImportRule` sein. Die `href`-Eigenschaft gibt die URL des importierten Stylesheets zurück.

```css
@import url("style.css") screen;
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].href); //returns style.css
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
