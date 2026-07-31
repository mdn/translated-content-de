---
title: "CSSNumericValue: equals()-Methode"
short-title: equals()
slug: Web/API/CSSNumericValue/equals
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`equals()`**-Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob die übergebenen Werte exakt gleich sind.
Um einen Wert von `true` zurückzugeben, müssen alle übergebenen Werte vom gleichen Typ und Wert sein und in der gleichen Reihenfolge vorliegen.
Dies ermöglicht eine schnelle Überprüfung auf strukturelle Gleichheit.

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

### Grundlegende Verwendung

Wie bereits erwähnt, müssen alle übergebenen Werte vom gleichen Typ und Wert sein und in der gleichen Reihenfolge vorliegen.
Einige der folgenden Beispiele zeigen, was passiert, wenn dies nicht der Fall ist.

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
