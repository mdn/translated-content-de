---
title: "CSSNumericValue: sub() Methode"
short-title: sub()
slug: Web/API/CSSNumericValue/sub
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`sub()`** Methode des [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Interfaces subtrahiert eine angegebene Zahl von der `CSSNumericValue`.

## Syntax

```js-nolint
sub(number)
```

### Parameter

- `number`
  - : Entweder eine Zahl oder ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum).

### Rückgabewert

Ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

### Grundlegende Verwendung

```js
let mathSum = CSS.px("23")
  .sub(CSS.percent("4"))
  .sub(CSS.cm("3"))
  .sub(CSS.in("9"));
// Prints "calc(23px - 4% - 3cm - 9in)"
console.log(mathSum.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
