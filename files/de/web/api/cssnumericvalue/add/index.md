---
title: "CSSNumericValue: add() Methode"
short-title: add()
slug: Web/API/CSSNumericValue/add
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`add()`**-Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle addiert eine angegebene Zahl zum `CSSNumericValue`.

## Syntax

```js-nolint
add(number)
```

### Parameter

- `number`
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Rückgabewert

Ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

### Grundlegende Verwendung

```js
let mathSum = CSS.px("23")
  .add(CSS.percent("4"))
  .add(CSS.cm("3"))
  .add(CSS.in("9"));
// Prints "calc(23px + 4% + 3cm + 9in)"
console.log(mathSum.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
