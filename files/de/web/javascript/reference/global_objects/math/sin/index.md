---
title: Math.sin()
short-title: sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Math.sin()`** statische Methode gibt den Sinus einer Zahl in Bogenmaß zurück.

{{InteractiveExample("JavaScript Demo: Math.sin()")}}

```js interactive-example
function getCircleY(radians, radius) {
  return Math.sin(radians) * radius;
}

console.log(getCircleY(1, 10));
// Expected output: 8.414709848078965

console.log(getCircleY(2, 10));
// Expected output: 9.092974268256818

console.log(getCircleY(Math.PI, 10));
// Expected output: 1.2246467991473533e-15
```

## Syntax

```js-nolint
Math.sin(x)
```

### Parameter

- `x`
  - : Eine Zahl, die einen Winkel im Bogenmaß darstellt.

### Rückgabewert

Der Sinus von `x`, zwischen -1 und 1, einschließlich. Wenn `x` {{jsxref("Infinity")}}, `-Infinity` oder {{jsxref("NaN")}} ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `sin()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.sin()` und nicht als Methode eines von Ihnen erstellten `Math` Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.sin()

```js
Math.sin(-Infinity); // NaN
Math.sin(-0); // -0
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965
Math.sin(Math.PI / 2); // 1
Math.sin(Infinity); // NaN
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}
