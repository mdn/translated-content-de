---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Math.abs()`** gibt den Absolutwert einer Zahl zurück.

{{InteractiveExample("JavaScript Demo: Math.abs()")}}

```js interactive-example
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// Expected output: 2

console.log(difference(5, 3));
// Expected output: 2

console.log(difference(1.23456, 7.89012));
// Expected output: 6.6555599999999995
```

## Syntax

```js-nolint
Math.abs(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der Absolutwert von `x`. Falls `x` negativ oder `-0` ist, wird die entgegengesetzte Zahl `-x` (die nicht negativ ist) zurückgegeben. Andernfalls wird `x` selbst zurückgegeben. Das Ergebnis ist daher immer eine positive Zahl oder `0`.

## Beschreibung

Da `abs()` eine statische Methode von `Math` ist, wird sie immer als `Math.abs()` verwendet, anstatt als Methode eines erstellten `Math`-Objekts (da `Math` kein Konstruktor ist).

## Beispiele

### Verwendung von Math.abs()

```js
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
```

### Umwandlung des Parameters

`Math.abs()` [wandelt seinen Parameter in eine Zahl um](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Nicht umwandelbare Werte werden zu `NaN`, wodurch `Math.abs()` ebenfalls `NaN` zurückgibt.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
