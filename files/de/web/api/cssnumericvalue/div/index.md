---
title: "CSSNumericValue: div()-Methode"
short-title: div()
slug: Web/API/CSSNumericValue/div
l10n:
  sourceCommit: ca4b3f28ed0e1ae9817e84a2eab11c2184a0603b
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`div()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) dividiert den `CSSNumericValue` durch den übergebenen Wert.

## Syntax

```js-nolint
div()
div(number1)
div(number1, number2)
div(number1, number2, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN` {{optional_inline}}
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Rückgabewert

Ein [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) oder ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), wenn `this` und alle Argumente einfache Zahlen sind oder wenn alle bis auf eines einfache Zahlen sind.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Methode ein ungültiger Typ übergeben wurde.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn einer der Werte `number1`, …, `numberN` gleich 0 oder -0 ist oder zu 0 oder -0 aufgelöst wird.

## Beispiele

### Grundlegende Verwendung

```js
let mathProduct = CSS.px(24).div(CSS.percent(4));
// Prints "calc(24px / 4%)"
mathProduct.toString();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
