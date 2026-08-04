---
title: "CSSNumericValue: div() Methode"
short-title: div()
slug: Web/API/CSSNumericValue/div
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`div()`** Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle teilt den `CSSNumericValue` durch den angegebenen Wert.

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
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wird.

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
