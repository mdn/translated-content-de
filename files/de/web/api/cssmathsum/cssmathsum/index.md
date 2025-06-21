---
title: "CSSMathSum: CSSMathSum() Konstruktor"
short-title: CSSMathSum()
slug: Web/API/CSSMathSum/CSSMathSum
l10n:
  sourceCommit: e1f6592bf96c5614a81ccb5dbd65e301b734b0e7
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

Der **`CSSMathSum()`** Konstruktor erstellt ein neues [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) Objekt, das ein neues [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) Objekt erzeugt. Dieses Objekt stellt das Ergebnis dar, das durch den Aufruf von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

## Syntax

```js-nolint
new CSSMathSum(values)
```

### Parameter

- `values`
  - : Eine oder mehrere Zahlen (die in [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)s mit `unit: "number"` eingebunden sind) oder [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Objekte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
