---
title: "CSSRule: parentRule-Eigenschaft"
short-title: parentRule
slug: Web/API/CSSRule/parentRule
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{ APIRef("CSSOM") }}

Die **`parentRule`**-Eigenschaft des [`CSSRule`](/de/docs/Web/API/CSSRule)-Interfaces gibt die enthaltene Regel der aktuellen Regel zurück, falls vorhanden, oder andernfalls null.

## Wert

Ein [`CSSRule`](/de/docs/Web/API/CSSRule), welcher der Typ der enthaltenen Regeln ist. Wenn die aktuelle Regel in einer Media-Query enthalten ist, wird [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) zurückgegeben. Andernfalls wird null zurückgegeben.

## Beispiele

```css
@media (width >= 500px) {
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
