---
title: "CSSNumericValue: min()-Methode"
short-title: min()
slug: Web/API/CSSNumericValue/min
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`min()`**-Methode der
{{domxref("CSSNumericValue")}}-Schnittstelle gibt den niedrigsten Wert unter den übergebenen Werten zurück. Die übergebenen Werte müssen vom gleichen Typ sein.

## Syntax

```js-nolint
min(number1, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN`
  - : Entweder eine Zahl oder ein {{domxref('CSSNumericValue')}}.

### Rückgabewert

Ein {{domxref('CSSUnitValue')}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

Wie bereits erwähnt, müssen alle übergebenen Werte vom gleichen Typ und Wert sein. Einige der folgenden Beispiele veranschaulichen, was passiert, wenn sie es nicht sind.

```js
// Gibt "1cm" aus
console.log(CSS.cm("1").min(CSS.cm("2")).toString());

// Gibt "max(1cm, 0.393701in)" aus
console.log(CSS.cm("1").max(CSS.in("0.393701")).toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
