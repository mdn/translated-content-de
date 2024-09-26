---
title: "CSSRule: parentRule-Eigenschaft"
short-title: parentRule
slug: Web/API/CSSRule/parentRule
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die **`parentRule`**-Eigenschaft des {{domxref("CSSRule")}} Interface gibt die umgebende Regel der aktuellen Regel zurück, falls diese existiert, oder andernfalls null.

## Wert

Ein {{domxref("CSSRule")}}, welches der Typ der umgebenden Regeln ist. Wenn die aktuelle Regel innerhalb einer Medienabfrage steht, würde dies {{domxref("CSSMediaRule")}} zurückgeben. Andernfalls wird null zurückgegeben.

## Beispiele

```css
@media (min-width: 500px) {
  .box {
    width: 100px;
    height: 200px;
    background-color: red;
  }

  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let childRules = myRules[0].cssRules;
console.log(childRules[0].parentRule); // a CSSMediaRule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}