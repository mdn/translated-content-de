---
title: "CSSNumericValue: equals() Methode"
short-title: equals()
slug: Web/API/CSSNumericValue/equals
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`equals()`**-Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob die übergebenen Werte streng gleich sind.
Um den Wert `true` zurückzugeben, müssen alle übergebenen Werte vom gleichen Typ und Wert sein und in der gleichen Reihenfolge stehen.
Dies ermöglicht es, die strukturelle Gleichheit schnell zu testen.

## Syntax

```js-nolint
equals()
equals(number1)
equals(number1, number2)
equals(number1, number2, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN` {{optional_inline}}
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Rückgabewert

Ein boolescher Wert.

### Ausnahmen

Keine.

## Beispiele

### Grundlegende Verwendung

Wie bereits erwähnt, müssen alle übergebenen Werte vom gleichen Typ und Wert sein und in der gleichen Reihenfolge stehen.
Einige der folgenden Beispiele veranschaulichen, was passiert, wenn dies nicht der Fall ist.

```js
let cssMathSum = new CSSMathSum(CSS.px(1), CSS.px(2));
let matchingCssMathSum = new CSSMathSum(CSS.px(1), CSS.px(2));
// Prints true
console.log(cssMathSum.equals(matchingCssMathSum));

let otherCssMathSum = CSSMathSum(CSS.px(2), CSS.px(1));
// Prints false
console.log(cssMathSum.equals(otherCssMathSum));

// Also prints false
console.log(CSS.cm("1").equal(CSS.in("0.393701")));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
