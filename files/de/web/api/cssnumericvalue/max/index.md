---
title: "CSSNumericValue: max() Methode"
short-title: max()
slug: Web/API/CSSNumericValue/max
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`max()`**-Methode der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) gibt den höchsten Wert unter den übergebenen Werten zurück. Die übergebenen Werte müssen vom gleichen Typ sein.

## Syntax

```js-nolint
max(number1, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN`
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Rückgabewert

Ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

Wie bereits erwähnt, müssen alle übergebenen Werte vom gleichen Typ und Wert sein. Einige der folgenden Beispiele zeigen, was passiert, wenn sie es nicht sind.

```js
// Prints "2cm"
console.log(CSS.cm("1").max(CSS.cm("2")).toString());

// Prints "max(1cm, 0.393701in)"
console.log(CSS.cm("1").max(CSS.in("0.393701")).toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
