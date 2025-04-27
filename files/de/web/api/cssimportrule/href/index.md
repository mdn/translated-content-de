---
title: "CSSImportRule: href-Eigenschaft"
short-title: href
slug: Web/API/CSSImportRule/href
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`href`**-Eigenschaft der
[`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt die URL zurück, die durch die
{{cssxref("@import")}}-[@regel](/de/docs/Web/CSS/CSS_syntax/At-rule) angegeben wird.

Die aufgelöste URL wird das [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut des zugehörigen Stylesheets sein.

## Wert

Ein String.

## Beispiele

Das folgende Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher ist das erste Element in der Liste der CSS-Regeln eine `CSSImportRule`. Die
`href`-Eigenschaft gibt die URL des importierten Stylesheets zurück.

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].href); // 'style.css'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
