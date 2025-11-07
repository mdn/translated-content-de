---
title: "CSSImportRule: href-Eigenschaft"
short-title: href
slug: Web/API/CSSImportRule/href
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`href`**-Eigenschaft der [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt die URL zurück, die mit der {{cssxref("@import")}}-[@-Rule](/de/docs/Web/CSS/CSS_syntax/At-rules) angegeben wurde.

Die aufgelöste URL wird das [`href`](/de/docs/Web/HTML/Reference/Elements/link#href)-Attribut des zugehörigen Stylesheets sein.

## Wert

Ein String.

## Beispiele

Das folgende Stylesheet beinhaltet eine einzelne {{cssxref("@import")}}-Regel. Daher wird der erste Eintrag in der Liste der CSS-Regeln ein `CSSImportRule` sein. Die `href`-Eigenschaft gibt die URL des importierten Stylesheets zurück.

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
