---
title: "CSSNumericValue: equals() Methode"
short-title: equals()
slug: Web/API/CSSNumericValue/equals
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`equals()`** Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle gibt einen booleschen Wert zurück, der anzeigt, ob die übergebenen Werte streng gleich sind.
Damit ein Wert von `true` zurückgegeben wird, müssen alle übergebenen Werte vom gleichen Typ und Wert sein und in der gleichen Reihenfolge stehen.
Dies ermöglicht es, die strukturelle Gleichheit schnell zu testen.

## Syntax

```js-nolint
equals(number)
```

### Parameter

- `number`
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Rückgabewert

Ein boolescher Wert.

### Ausnahmen

Keine.

## Beispiele

### Grundlagen der Verwendung

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
