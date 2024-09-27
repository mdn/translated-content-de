---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Number.isFinite()`** bestimmt, ob der übergebene Wert eine endliche Zahl ist — das heißt, sie überprüft, ob ein gegebener Wert eine Zahl ist und die Zahl weder positive {{jsxref("Infinity")}}, negative `Infinity` noch {{jsxref("NaN")}} ist.

{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}

## Syntax

```js-nolint
Number.isFinite(value)
```

### Parameter

- `value`
  - : Der Wert, der auf Endlichkeit getestet werden soll.

### Rückgabewert

Der boolesche Wert `true`, wenn der gegebene Wert eine endliche Zahl ist. Ansonsten `false`.

## Beispiele

### Verwendung von isFinite()

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true
```

### Unterschied zwischen Number.isFinite() und global isFinite()

Im Vergleich zur globalen {{jsxref("isFinite()")}} Funktion konvertiert diese Methode den Parameter nicht zuerst in eine Zahl. Dies bedeutet, dass nur Werte des Typs Zahl _und_ endliche Werte `true` zurückgeben, und Nicht-Zahlen immer `false` zurückgeben.

```js
isFinite("0"); // true; coerced to number 0
Number.isFinite("0"); // false
isFinite(null); // true; coerced to number 0
Number.isFinite(null); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.isFinite` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("isFinite()")}}
