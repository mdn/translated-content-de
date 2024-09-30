---
title: "CSSNumericValue: div() Methode"
short-title: div()
slug: Web/API/CSSNumericValue/div
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`div()`**-Methode der
[`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle teilt den `CSSNumericValue` durch den
übergebenen Wert.

## Syntax

```js-nolint
div(number)
```

### Parameter

- `number`
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Rückgabewert

Ein [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

```js
let mathProduct = CSS.px("24").div(CSS.percent("4"));
// Prints "calc(24px / 4%)"
mathProduct.toString();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
