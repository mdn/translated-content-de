---
title: "CSSNumericValue: mul() Methode"
short-title: mul()
slug: Web/API/CSSNumericValue/mul
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`mul()`** Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle multipliziert den `CSSNumericValue` mit den angegebenen Werten.

## Syntax

```js-nolint
mul()
mul(number1)
mul(number1, number2)
mul(number1, number2, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN` {{optional_inline}}
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Rückgabewert

Ein [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct), oder ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), wenn `this` und jedes Argument einfache Zahlen sind oder alle bis auf eines einfache Zahlen sind.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

### Grundlegende Verwendung

```js
let mathProduct = CSS.px(23).mul(CSS.percent(4)).mul(CSS.cm(3)).mul(CSS.in(9));
// Prints "calc(23px * 4% * 3cm * 9in)"
console.log(mathProduct.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
