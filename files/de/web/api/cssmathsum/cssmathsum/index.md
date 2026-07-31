---
title: "CSSMathSum: CSSMathSum()-Konstruktor"
short-title: CSSMathSum()
slug: Web/API/CSSMathSum/CSSMathSum
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

Der **`CSSMathSum()`**-Konstruktor erstellt ein neues [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)-Objekt, das das Ergebnis darstellt, welches durch den Aufruf von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wurde.

## Syntax

```js-nolint
new CSSMathSum(values)
```

### Parameter

- `values`
  - : Eine oder mehrere Zahlen (die in [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)s mit `unit: "number"` eingebettet sind) oder [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
