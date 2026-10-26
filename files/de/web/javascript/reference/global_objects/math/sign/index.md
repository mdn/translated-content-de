---
title: Math.sign()
short-title: sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Math.sign()`** gibt 1 oder -1 zurück und zeigt damit das Vorzeichen der als Argument übergebenen Zahl an. Ist die Eingabe 0 oder -0, wird sie unverändert zurückgegeben.

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

Eine Zahl, die das Vorzeichen von `x` angibt:

- Ist `x` positiv, wird `1` zurückgegeben.
- Ist `x` negativ, wird `-1` zurückgegeben.
- Ist `x` positiv null, wird `0` zurückgegeben.
- Ist `x` negativ null, wird `-0` zurückgegeben.
- Andernfalls wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `sign()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.sign()` und nicht als Methode eines selbst erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Math.sign() verwenden

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

- [Polyfill für `Math.sign` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- [Polyfill für `Math.sign` von es-shims](https://www.npmjs.com/package/math.sign)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
