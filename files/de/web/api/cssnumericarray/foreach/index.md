---
title: "CSSNumericArray: forEach() Methode"
short-title: forEach()
slug: Web/API/CSSNumericArray/forEach
l10n:
  sourceCommit: e03cdadd99259770aefef875de5a988aeda6aff0
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`forEach()`** Methode der [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) Schnittstelle führt eine bereitgestellte Funktion einmal für jedes Element im Objekt aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Die Funktion, die für jedes Element ausgeführt wird und drei Argumente nimmt:
    - `currentValue`
      - : Das aktuell verarbeitete Element.
    - `index` {{optional_inline}}
      - : Der Index des aktuell verarbeiteten Elements.
    - `array` {{optional_inline}}
      - : Das `CSSNumericArray`, auf dem `forEach()` aufgerufen wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet werden soll, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Iteration mit forEach()

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

sum.values.forEach((value, index) => {
  console.log(index, value.toString());
});
// 0 "10px"
// 1 "5em"
// 2 "50%"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericArray.entries()`](/de/docs/Web/API/CSSNumericArray/entries)
- [`CSSNumericArray.keys()`](/de/docs/Web/API/CSSNumericArray/keys)
- [`CSSNumericArray.length`](/de/docs/Web/API/CSSNumericArray/length)
- [`CSSNumericArray.values()`](/de/docs/Web/API/CSSNumericArray/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
