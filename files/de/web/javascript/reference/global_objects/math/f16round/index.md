---
title: Math.f16round()
short-title: f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Math.f16round()`** statische Methode gibt die nächste [16-Bit-Halb-Präzisions](https://en.wikipedia.org/wiki/Half-precision_floating-point_format)-Fließkommadarstellung einer Zahl zurück.

{{InteractiveExample("JavaScript Demo: Math.f16round()")}}

```js interactive-example
console.log(Math.f16round(5.5));
// Expected output: 5.5

console.log(Math.f16round(5.05));
// Expected output: 5.05078125

console.log(Math.f16round(5));
// Expected output: 5

console.log(Math.f16round(-5.05));
// Expected output: -5.05078125
```

## Syntax

```js-nolint
Math.f16round(doubleFloat)
```

### Parameter

- `doubleFloat`
  - : Eine Zahl.

### Rückgabewert

Die nächste [16-Bit-Halb-Präzisions](https://en.wikipedia.org/wiki/Half-precision_floating-point_format)-Fließkommadarstellung von `doubleFloat`.

## Beschreibung

`Math.f16round` ist das 16-Bit-Gegenstück zu {{jsxref("Math.fround()")}}. Es soll einige Ungenauigkeiten glätten, wenn mit float16-Zahlen interagiert wird, wie z.B. beim Lesen aus einem {{jsxref("Float16Array")}}. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit-Fließkommazahl, es führt lediglich ein "round to even" auf dem 10. Bit der Mantisse durch und setzt alle folgenden Mantissabits auf `0`. Befindet sich die Zahl außerhalb des Bereichs eines 16-Bit-Fließkommas, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `f16round()` eine statische Methode von `Math` ist, verwendet man sie immer als `Math.f16round()` und nicht als Methode eines selbst erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.f16round()

Die Zahl 1.5 kann im binären Zahlensystem präzise dargestellt werden und ist in 16-Bit und 64-Bit identisch:

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

Die Zahl 1.337 kann jedoch im binären Zahlensystem nicht präzise dargestellt werden, daher unterscheidet sie sich in 16-Bit und 64-Bit:

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000 ist zu groß für ein 16-Bit-Fließkomma, daher wird `Infinity` zurückgegeben:

```js
Math.f16round(100000); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.f16round` in `core-js`](https://github.com/zloirock/core-js#float16-methods)
- [es-shims Polyfill von `Math.f16round`](https://www.npmjs.com/package/math.f16round)
- {{jsxref("Math.fround()")}}
- {{jsxref("Math.round()")}}
