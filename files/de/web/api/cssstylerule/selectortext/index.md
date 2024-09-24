---
title: "CSSStyleRule: Eigenschaft selectorText"
short-title: selectorText
slug: Web/API/CSSStyleRule/selectorText
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM") }}

Die **`selectorText`**-Eigenschaft der {{domxref("CSSStyleRule")}}-Schnittstelle ruft die Selektoren ab und setzt sie, die mit der `CSSStyleRule` verknüpft sind.

## Wert

Ein String.

## Beispiele

Das CSS enthält eine Stilregel. Dies wird die erste von `document.styleSheets[0].cssRules` zurückgegebene {{domxref("CSSRule")}} sein. `myRules[0].selectorText` gibt daher einen wörtlichen String des Selektors zurück, in diesem Fall `"h1"`.

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].selectorText); // ein String, der "h1" enthält.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
