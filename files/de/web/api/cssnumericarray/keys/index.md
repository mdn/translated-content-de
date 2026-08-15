---
title: "CSSNumericArray: keys()-Methode"
short-title: keys()
slug: Web/API/CSSNumericArray/keys
l10n:
  sourceCommit: e03cdadd99259770aefef875de5a988aeda6aff0
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`keys()`**-Methode des [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)-Interfaces gibt einen neuen _Array-Iterator_ zurück, der den Index jedes Elements im Objekt liefert.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer [iterierbarer Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols).

## Beispiele

### Über Indizes iterieren

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

for (const index of sum.values.keys()) {
  console.log(index);
}
// 0
// 1
// 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericArray.entries()`](/de/docs/Web/API/CSSNumericArray/entries)
- [`CSSNumericArray.forEach()`](/de/docs/Web/API/CSSNumericArray/forEach)
- [`CSSNumericArray.length`](/de/docs/Web/API/CSSNumericArray/length)
- [`CSSNumericArray.values()`](/de/docs/Web/API/CSSNumericArray/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
