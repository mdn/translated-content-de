---
title: "CSSStyleRule: selectorText-Eigenschaft"
short-title: selectorText
slug: Web/API/CSSStyleRule/selectorText
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM") }}

Die **`selectorText`**-Eigenschaft des [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Interfaces gibt Selektoren zurück und setzt diese, die mit der `CSSStyleRule` assoziiert sind.

## Wert

Ein String.

## Beispiele

Das CSS enthält eine Stilregel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die durch `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0].selectorText` gibt daher einen buchstäblichen String des Selektors zurück, in diesem Fall `"h1"`.

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].selectorText); // a string containing "h1".
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
