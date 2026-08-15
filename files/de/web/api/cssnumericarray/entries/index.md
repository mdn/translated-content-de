---
title: "CSSNumericArray: entries()-Methode"
short-title: entries()
slug: Web/API/CSSNumericArray/entries
l10n:
  sourceCommit: e03cdadd99259770aefef875de5a988aeda6aff0
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`entries()`**-Methode der [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)-Schnittstelle gibt einen neuen _Array-Iterator_ zurück, der `[index, value]`-Paare für jedes Element im Objekt liefert.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer [iterierbarer Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols).

## Beispiele

### Iterieren über Index/Wert-Paare

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
- [Den CSS Typed OM verwenden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
