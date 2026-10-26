---
title: Number.isFinite()
short-title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Number.isFinite()`** bestimmt, ob der übergebene Wert eine endliche Zahl ist. Sie prüft also, ob der Wert eine Zahl ist und weder positiv {{jsxref("Infinity")}} noch negativ `Infinity` oder {{jsxref("NaN")}} ist.

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
  - : Der Wert, der darauf geprüft werden soll, ob er endlich ist.

### Rückgabewert

Der boolesche Wert `true`, wenn der übergebene Wert eine endliche Zahl ist. Andernfalls `false`.

## Beispiele

### Verwendung von isFinite()

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true
```

### Unterschied zwischen Number.isFinite() und der globalen Funktion isFinite()

Im Gegensatz zur globalen Funktion {{jsxref("isFinite()")}} wandelt diese Methode den Parameter nicht zuerst in eine Zahl um. Das bedeutet, dass nur Werte vom Typ Zahl, die _außerdem_ endlich sind, `true` zurückgeben. Werte, die keine Zahlen sind, geben immer `false` zurück.

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

- [Polyfill für `Number.isFinite` in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- [Polyfill für `Number.isFinite` von es-shims](https://www.npmjs.com/package/number.isfinite)
- {{jsxref("Number")}}
- {{jsxref("isFinite()")}}
