---
title: Math.abs()
short-title: abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Math.abs()`** statische Methode gibt den Absolutwert einer Zahl zurück.

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

Der Absolutwert von `x`. Wenn `x` negativ oder `-0` ist, wird seine Gegenummer `-x` (die nicht-negativ ist) zurückgegeben. Andernfalls wird `x` selbst zurückgegeben. Das Ergebnis ist daher immer eine positive Zahl oder `0`.

## Beschreibung

Da `abs()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.abs()`, anstatt sie als Methode eines erstellten `Math`-Objekts zu verwenden (`Math` ist kein Konstruktor).

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

### Zwangskonvertierung des Parameters

`Math.abs()` [zwingt seinen Parameter zu einer Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Nicht konvertierbare Werte werden zu `NaN`, wodurch `Math.abs()` ebenfalls `NaN` zurückgibt.

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
