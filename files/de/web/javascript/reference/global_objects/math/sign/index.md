---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Math.sign()`** gibt 1 oder -1 zurück, um das Vorzeichen der übergebenen Zahl anzuzeigen. Wenn die Eingabe 0 oder -0 ist, wird sie unverändert zurückgegeben.

{{InteractiveExample("JavaScript Demo: Math.sign()")}}

```js interactive-example
console.log(Math.sign(3));
// Expected output: 1

console.log(Math.sign(-3));
// Expected output: -1

console.log(Math.sign(0));
// Expected output: 0

console.log(Math.sign("-3"));
// Expected output: -1
```

## Syntax

```js-nolint
Math.sign(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Eine Zahl, die das Vorzeichen von `x` darstellt:

- Wenn `x` positiv ist, wird `1` zurückgegeben.
- Wenn `x` negativ ist, wird `-1` zurückgegeben.
- Wenn `x` eine positive Null ist, wird `0` zurückgegeben.
- Wenn `x` eine negative Null ist, wird `-0` zurückgegeben.
- Andernfalls wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `sign()` eine statische Methode von `Math` ist, verwenden Sie diese immer als `Math.sign()` und nicht als Methode eines erstellten `Math`-Objekts (da `Math` kein Konstruktor ist).

## Beispiele

### Verwendung von Math.sign()

```js
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.sign` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
