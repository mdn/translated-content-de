---
title: "CSSMathInvert: CSSMathInvert() Konstruktor"
short-title: CSSMathInvert()
slug: Web/API/CSSMathInvert/CSSMathInvert
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSMathInvert()`** Konstruktor erstellt ein neues [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)-Objekt, das eine CSS {{CSSXref('calc','calc()')}} darstellt und als `calc(1 / value)` verwendet wird.

## Syntax

```js-nolint
new CSSMathInvert(arg)
```

### Parameter

- `arg`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Ausnahmen

- [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - : Wird ausgelöst, wenn das Argument 0 oder -0 ist.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
