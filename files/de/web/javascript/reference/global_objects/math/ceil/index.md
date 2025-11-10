---
title: Math.ceil()
short-title: ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Math.ceil()`** rundet immer auf und gibt die kleinste ganze Zahl zurück, die größer oder gleich einer gegebenen Zahl ist.

{{InteractiveExample("JavaScript Demo: Math.ceil()")}}

```js interactive-example
console.log(Math.ceil(0.95));
// Expected output: 1

console.log(Math.ceil(4));
// Expected output: 4

console.log(Math.ceil(7.004));
// Expected output: 8

console.log(Math.ceil(-7.004));
// Expected output: -7
```

## Syntax

```js-nolint
Math.ceil(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Die kleinste ganze Zahl, die größer oder gleich `x` ist. Es ist derselbe Wert wie [`-Math.floor(-x)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).

## Beschreibung

Da `ceil()` eine statische Methode von `Math` ist, wird sie immer als `Math.ceil()` verwendet und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (da `Math` kein Konstruktor ist).

## Beispiele

### Verwendung von Math.ceil()

```js
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
