---
title: "CSSNumericArray: Methode entries()"
short-title: entries()
slug: Web/API/CSSNumericArray/entries
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`entries()`** des Interfaces [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) gibt einen neuen _Array-Iterator_ zurück, der für jedes Element im Objekt `[index, value]`-Paare liefert.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

### Über Index/Wert-Paare iterieren

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

for (const [index, value] of sum.values.entries()) {
  console.log(index, value.toString());
}
// 0 "10px"
// 1 "5em"
// 2 "50%"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericArray.forEach()`](/de/docs/Web/API/CSSNumericArray/forEach)
- [`CSSNumericArray.keys()`](/de/docs/Web/API/CSSNumericArray/keys)
- [`CSSNumericArray.length`](/de/docs/Web/API/CSSNumericArray/length)
- [`CSSNumericArray.values()`](/de/docs/Web/API/CSSNumericArray/values)
- [Verwenden des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
