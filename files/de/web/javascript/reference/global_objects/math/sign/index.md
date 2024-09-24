---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Methode **`Math.sign()`** gibt 1 oder -1 zurück, was das Vorzeichen der als Argument übergebenen Zahl angibt. Wenn die Eingabe 0 oder -0 ist, wird sie unverändert zurückgegeben.

{{EmbedInteractiveExample("pages/js/math-sign.html")}}

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
- Wenn `x` positive Null ist, wird `0` zurückgegeben.
- Wenn `x` negative Null ist, wird `-0` zurückgegeben.
- Andernfalls wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `sign()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.sign()`, anstatt als eine Methode eines erstellten `Math` Objekts (`Math` ist kein Konstruktor).

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
