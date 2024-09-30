---
title: "CSSPageRule: selectorText-Eigenschaft"
short-title: selectorText
slug: Web/API/CSSPageRule/selectorText
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

Die **`selectorText`**-Eigenschaft der [`CSSPageRule`](/de/docs/Web/API/CSSPageRule)-Schnittstelle erhält und setzt die Selektoren, die mit der `CSSPageRule` verbunden sind.

## Wert

Ein String.

## Beispiele

Das Stylesheet enthält zwei {{cssxref("@page")}}-Regeln. Die `selectorText`-Eigenschaft gibt den buchstäblichen Selektortext von `:first` als String zurück.

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

```js
let myRules = document.styleSheets[0].cssRules; //returns two myRules
console.log(myRules[1].selectorText); // returns the string ":first"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
