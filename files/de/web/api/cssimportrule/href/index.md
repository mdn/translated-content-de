---
title: "CSSImportRule: href-Eigenschaft"
short-title: href
slug: Web/API/CSSImportRule/href
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`href`**-Eigenschaft der
[`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt die URL zurück, die durch die
{{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/At-rule) angegeben wird.

Die aufgelöste URL wird das [`href`](/de/docs/Web/HTML/Element/link#href)-Attribut des
zugehörigen Stylesheets sein.

## Wert

Ein String.

## Beispiele

Das folgende Stylesheet enthält eine einzige {{cssxref("@import")}}-Regel. Daher wird das
erste Element in der Liste der CSS-Regeln eine `CSSImportRule` sein. Die
`href`-Eigenschaft gibt die URL des importierten Stylesheets zurück.

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
