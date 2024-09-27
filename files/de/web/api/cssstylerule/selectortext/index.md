---
title: "CSSStyleRule: selectorText-Eigenschaft"
short-title: selectorText
slug: Web/API/CSSStyleRule/selectorText
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM") }}

Die **`selectorText`**-Eigenschaft der [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Schnittstelle erhält und setzt die Selektoren, die mit der `CSSStyleRule` verbunden sind.

## Wert

Ein String.

## Beispiele

Das CSS enthält eine Stilregel. Diese wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0].selectorText` gibt daher einen Literal-String des Selektors zurück, in diesem Fall `"h1"`.

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
