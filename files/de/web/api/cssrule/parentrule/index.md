---
title: "CSSRule: Eigenschaft parentRule"
short-title: parentRule
slug: Web/API/CSSRule/parentRule
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte Eigenschaft **`parentRule`** der Schnittstelle [`CSSRule`](/de/docs/Web/API/CSSRule) gibt die umschließende Regel der aktuellen Regel zurück, falls eine solche existiert. Andernfalls gibt sie null zurück.

## Wert

Eine [`CSSRule`](/de/docs/Web/API/CSSRule), deren Typ dem der umschließenden Regel entspricht. Befindet sich die aktuelle Regel innerhalb einer Media Query, wird eine [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) zurückgegeben. Andernfalls wird null zurückgegeben.

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
