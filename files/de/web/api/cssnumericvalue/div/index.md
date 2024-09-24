---
title: "CSSNumericValue: div() Methode"
short-title: div()
slug: Web/API/CSSNumericValue/div
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`div()`**-Methode der
{{domxref("CSSNumericValue")}}-Schnittstelle teilt den `CSSNumericValue` durch den angegebenen Wert.

## Syntax

```js-nolint
div(number)
```

### Parameter

- `number`
  - : Entweder eine Zahl oder ein {{domxref('CSSNumericValue')}}.

### Rückgabewert

Ein {{domxref('CSSMathProduct')}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

```js
let mathProduct = CSS.px("24").div(CSS.percent("4"));
// Druckt "calc(24px / 4%)" aus
mathProduct.toString();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
