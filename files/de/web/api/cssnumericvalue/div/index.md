---
title: "CSSNumericValue: div() Methode"
short-title: div()
slug: Web/API/CSSNumericValue/div
l10n:
  sourceCommit: 542f8a0bccdf6258fb687ee878b87513e4fd1711
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`div()`** Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle dividiert den `CSSNumericValue` durch den angegebenen Wert.

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
- [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - : Wird ausgelöst, wenn `number` 0 oder -0 ist oder darauf auflöst.

## Beispiele

### Grundlegende Verwendung

```js
let mathProduct = CSS.px("24").div(CSS.percent("4"));
// Prints "calc(24px / 4%)"
mathProduct.toString();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
