---
title: "CSSNumericArray: length-Eigenschaft"
short-title: length
slug: Web/API/CSSNumericArray/length
l10n:
  sourceCommit: e03cdadd99259770aefef875de5a988aeda6aff0
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`length`**-Schreibgeschützte Eigenschaft des [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)-Interfaces gibt die Anzahl der Elemente im Objekt zurück.

## Wert

Eine Ganzzahl.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel lesen wir die `length` des [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) aus, das von der `values`-Eigenschaft eines [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurückgegeben wird:

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(sum.values.length); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericArray.entries()`](/de/docs/Web/API/CSSNumericArray/entries)
- [`CSSNumericArray.forEach()`](/de/docs/Web/API/CSSNumericArray/forEach)
- [`CSSNumericArray.keys()`](/de/docs/Web/API/CSSNumericArray/keys)
- [`CSSNumericArray.values()`](/de/docs/Web/API/CSSNumericArray/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
