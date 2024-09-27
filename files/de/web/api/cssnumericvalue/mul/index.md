---
title: "CSSNumericValue: mul() Methode"
short-title: mul()
slug: Web/API/CSSNumericValue/mul
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`mul()`** Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle multipliziert den `CSSNumericValue` mit dem angegebenen Wert.

## Syntax

```js-nolint
mul(number)
```

### Parameter

- `number`
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Rückgabewert

Ein [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

```js
let mathSum = CSS.px("23")
  .mul(CSS.percent("4"))
  .mul(CSS.cm("3"))
  .mul(CSS.in("9"));
// Prints "calc(23px * 4% * 3cm * 9in)"
console.log(mathSum.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
