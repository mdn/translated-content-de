---
title: Number.isFinite()
short-title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Number.isFinite()`** statische Methode bestimmt, ob der übergebene Wert eine endliche Zahl ist – das heißt, sie überprüft, ob ein gegebener Wert eine Zahl ist, und die Zahl weder positive {{jsxref("Infinity")}}, negative `Infinity`, noch {{jsxref("NaN")}} ist.

{{InteractiveExample("JavaScript Demo: Number.isFinite()")}}

```js interactive-example
console.log(Number.isFinite(1 / 0));
// Expected output: false

console.log(Number.isFinite(10 / 5));
// Expected output: true

console.log(Number.isFinite(0 / 0));
// Expected output: false
```

## Syntax

```js-nolint
Number.isFinite(value)
```

### Parameter

- `value`
  - : Der Wert, der auf Endlichkeit getestet werden soll.

### Rückgabewert

Der boolesche Wert `true`, wenn der gegebene Wert eine endliche Zahl ist. Andernfalls `false`.

## Beispiele

### Verwendung von isFinite()

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true
```

### Unterschied zwischen Number.isFinite() und globalem isFinite()

Im Vergleich zur globalen {{jsxref("isFinite()")}} Funktion konvertiert diese Methode den Parameter nicht zuerst in eine Zahl. Das bedeutet, dass nur Werte vom Typ Nummer _und_ endlich `true` zurückgeben, und Nicht-Zahlen immer `false` zurückgeben.

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
- [es-shims polyfill von `Number.isFinite`](https://www.npmjs.com/package/number.isfinite)
- {{jsxref("Number")}}
- {{jsxref("isFinite()")}}
