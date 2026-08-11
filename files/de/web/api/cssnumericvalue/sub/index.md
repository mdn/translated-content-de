---
title: "CSSNumericValue: sub()-Methode"
short-title: sub()
slug: Web/API/CSSNumericValue/sub
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`sub()`**-Methode des [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Interfaces subtrahiert eine übergebene Zahl von dem `CSSNumericValue`.

## Syntax

```js-nolint
sub()
sub(number1)
sub(number1, number2)
sub(number1, number2, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN` {{optional_inline}}
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Rückgabewert

Ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), oder ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), wenn `this` und jedes Argument die gleiche Einheit haben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

### Grundlegende Verwendung

```js
let mathSum = CSS.px(23).sub(CSS.percent(4)).sub(CSS.cm(3)).sub(CSS.in(9));
// Prints "calc(23px - 4% - 3cm - 9in)"
console.log(mathSum.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
