---
title: "CSSNumericValue: min() Methode"
short-title: min()
slug: Web/API/CSSNumericValue/min
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`min()`** Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle gibt den niedrigsten Wert unter den übergebenen Werten zurück.
Die übergebenen Werte müssen denselben Typ haben.

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
  - : Wird ausgegeben, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

### Grundlegende Verwendung

Wie bereits erwähnt, müssen alle übergebenen Werte denselben Typ und Wert haben.
Einige der folgenden Beispiele veranschaulichen, was passiert, wenn dies nicht der Fall ist.

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
