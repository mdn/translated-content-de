---
title: "CSSNumericArray: values()-Methode"
short-title: values()
slug: Web/API/CSSNumericArray/values
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`values()`**-Methode des [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)-Interfaces gibt einen neuen _Array-Iterator_ zurück, der jedes Element im Objekt liefert.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

### Über Werte iterieren

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

for (const value of sum.values.values()) {
  console.log(value.toString());
}
// "10px"
// "5em"
// "50%"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericArray.entries()`](/de/docs/Web/API/CSSNumericArray/entries)
- [`CSSNumericArray.forEach()`](/de/docs/Web/API/CSSNumericArray/forEach)
- [`CSSNumericArray.keys()`](/de/docs/Web/API/CSSNumericArray/keys)
- [`CSSNumericArray.length`](/de/docs/Web/API/CSSNumericArray/length)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
