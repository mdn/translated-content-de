---
title: "CSSNumericValue: max() Methode"
short-title: max()
slug: Web/API/CSSNumericValue/max
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`max()`**-Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle gibt den höchsten Wert unter den übergebenen Werten zurück.
Die übergebenen Werte müssen vom gleichen Typ sein.

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
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

### Grundlegende Verwendung

Wie bereits erwähnt, müssen alle übergebenen Werte vom gleichen Typ und Wert sein.
Einige der folgenden Beispiele veranschaulichen, was passiert, wenn dies nicht der Fall ist.

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
