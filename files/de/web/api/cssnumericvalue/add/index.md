---
title: "CSSNumericValue: add() Methode"
short-title: add()
slug: Web/API/CSSNumericValue/add
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`add()`** Methode der
[`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle fügt einen angegebenen Wert zur
`CSSNumericValue` hinzu.

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
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

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
