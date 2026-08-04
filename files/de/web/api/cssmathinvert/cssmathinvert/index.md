---
title: "CSSMathInvert: CSSMathInvert() Konstruktor"
short-title: CSSMathInvert()
slug: Web/API/CSSMathInvert/CSSMathInvert
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSMathInvert()`** Konstruktor erzeugt ein neues [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) Objekt, das ein CSS {{CSSXref('calc','calc()')}} darstellt, verwendet als `calc(1 / value)`.

## Syntax

```js-nolint
new CSSMathInvert(arg)
```

### Parameter

- `arg`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Ausnahmen

- [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - : Wird ausgelöst, wenn der `arg` 0 oder -0 ist.

## Beispiele

Zu erledigen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
