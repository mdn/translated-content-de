---
title: "CSSMathSum: CSSMathSum()-Konstruktor"
short-title: CSSMathSum()
slug: Web/API/CSSMathSum/CSSMathSum
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}{{SeeCompatTable}}

Der **`CSSMathSum()`**-Konstruktor erstellt ein neues [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)-Objekt, das das Ergebnis darstellt, das durch Aufrufen von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

## Syntax

```js-nolint
new CSSMathSum(values)
```

### Parameter

- `values`
  - : Eine oder mehrere Zahlen (die in [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)s des Typs `unit: "number"` gepackt sind) oder [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
