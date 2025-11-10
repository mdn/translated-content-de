---
title: "CSSImportRule: href-Eigenschaft"
short-title: href
slug: Web/API/CSSImportRule/href
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`href`**-Eigenschaft der
[`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt die URL zurück, die durch die
{{cssxref("@import")}}-[@-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) angegeben wird.

Die aufgelöste URL entspricht dem [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut des
zugehörigen Stylesheets.

## Wert

Ein String.

## Beispiele

Das folgende Stylesheet enthält eine einzelne {{cssxref("@import")}}-Regel. Daher wird das erste Element in der Liste der CSS-Regeln ein `CSSImportRule` sein. Die
`href`-Eigenschaft gibt die URL des importierten Stylesheets zurück.

```css
@import "style.css" screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].href); // 'style.css'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
