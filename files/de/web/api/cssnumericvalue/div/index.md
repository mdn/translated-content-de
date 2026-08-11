---
title: "CSSNumericValue: div() Methode"
short-title: div()
slug: Web/API/CSSNumericValue/div
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`div()`** Methode des [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Interfaces teilt den `CSSNumericValue` durch den angegebenen Wert.

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

Ein [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) oder ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) wenn `this` und jedes Argument einfache Zahlen sind, oder alle außer einem.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wirft einen Fehler, wenn ein ungültiger Typ an die Methode übergeben wurde.
- [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - : Wird ausgelöst, wenn eines der `number1`, …, `numberN` 0 oder -0 ist oder zu 0 aufgelöst wird.

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
