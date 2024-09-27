---
title: "CSSNumericValue: equals()-Methode"
short-title: equals()
slug: Web/API/CSSNumericValue/equals
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`equals()`**-Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob die übergebenen Werte streng gleich sind. Um einen Wert von `true` zurückzugeben, müssen alle übergebenen Werte vom selben Typ und Wert sein und in der gleichen Reihenfolge vorliegen. Dies ermöglicht es, die strukturelle Gleichheit schnell zu testen.

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

Wie bereits erwähnt, müssen alle übergebenen Werte vom selben Typ und Wert sein und in derselben Reihenfolge vorliegen. Einige der folgenden Beispiele veranschaulichen, was passiert, wenn sie es nicht sind.

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
