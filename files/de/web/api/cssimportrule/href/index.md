---
title: "CSSImportRule: href-Eigenschaft"
short-title: href
slug: Web/API/CSSImportRule/href
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`href`**-Eigenschaft der [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt die URL zurück, die durch das {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) angegeben wird.

Die aufgelöste URL wird das [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut des zugehörigen Stylesheets sein.

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
