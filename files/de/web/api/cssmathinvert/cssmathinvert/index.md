---
title: "CSSMathInvert: CSSMathInvert() Konstruktor"
short-title: CSSMathInvert()
slug: Web/API/CSSMathInvert/CSSMathInvert
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSMathInvert()`** Konstruktor erstellt ein neues [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)-Objekt, das ein CSS {{CSSXref('calc','calc()')}} verwendet als `calc(1 / value)` darstellt.

## Syntax

```js-nolint
new CSSMathInvert(arg)
```

### Parameter

- `arg`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Ausnahmen

- [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - : Wird ausgelöst, wenn der Arg 0 oder -0 ist.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
