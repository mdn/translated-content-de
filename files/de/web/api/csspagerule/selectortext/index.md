---
title: "CSSPageRule: selectorText Eigenschaft"
short-title: selectorText
slug: Web/API/CSSPageRule/selectorText
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

Die **`selectorText`**-Eigenschaft der [`CSSPageRule`](/de/docs/Web/API/CSSPageRule)-Schnittstelle holt und setzt die Selektoren, die mit der `CSSPageRule` verbunden sind.

## Wert

Ein String.

## Beispiele

Das Stylesheet enthält zwei {{cssxref("@page")}}-Regeln. Die `selectorText`-Eigenschaft wird den literal Zeichenfolgensatz von `:first` als String zurückgeben.

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

```js
const myRules = document.styleSheets[0].cssRules; // Two myRules
console.log(myRules[1].selectorText); // ":first"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
