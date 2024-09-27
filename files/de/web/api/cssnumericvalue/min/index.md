---
title: "CSSNumericValue: min() Methode"
short-title: min()
slug: Web/API/CSSNumericValue/min
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`min()`** Methode der
[`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle gibt den niedrigsten Wert von den übergebenen Werten zurück. Die übergebenen Werte müssen vom gleichen Typ sein.

## Syntax

```js-nolint
min(number1, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN`
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Rückgabewert

Ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

Wie bereits erwähnt, müssen alle übergebenen Werte vom gleichen Typ und Wert sein. Einige der folgenden Beispiele veranschaulichen, was passiert, wenn dies nicht der Fall ist.

```js
// Prints "1cm"
console.log(CSS.cm("1").min(CSS.cm("2")).toString());

// Prints "max(1cm, 0.393701in)"
console.log(CSS.cm("1").max(CSS.in("0.393701")).toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
