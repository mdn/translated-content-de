---
title: "CSSNumericArray: keys()-Methode"
short-title: keys()
slug: Web/API/CSSNumericArray/keys
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`keys()`**-Methode des [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)-Interface gibt einen neuen _Array-Iterator_ zurück, der den Index jedes Elements im Objekt liefert.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

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
- [Verwenden des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
