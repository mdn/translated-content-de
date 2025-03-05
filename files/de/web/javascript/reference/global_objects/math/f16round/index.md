---
title: Math.f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die statische Methode **`Math.f16round()`** liefert die nächstgelegene [16-Bit-Halbpräzisions](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) Fließkommazahl-Darstellung einer Zahl.

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

Die nächstgelegene [16-Bit-Halbpräzisions](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) Fließkommazahl-Darstellung von `doubleFloat`.

## Beschreibung

`Math.f16round` ist das 16-Bit-Pendant zu {{jsxref("Math.fround()")}}. Es soll helfen, einige Ungenauigkeiten beim Umgang mit float16-Zahlen auszugleichen, z. B. beim Lesen von einem {{jsxref("Float16Array")}}. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit-Fließkommazahl; es wird lediglich "Runden auf gerade" am 10. Bit der Mantisse durchgeführt und alle folgenden Mantissenbits werden auf `0` gesetzt. Liegt die Zahl außerhalb des Bereichs eines 16-Bit-Fließkommawerts, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `f16round()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.f16round()`, anstatt als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.f16round()

Die Zahl 1.5 kann im binären Zahlensystem präzise dargestellt werden und ist in 16- und 64-Bit identisch:

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

Die Zahl 1.337 hingegen kann im binären Zahlensystem nicht präzise dargestellt werden und unterscheidet sich daher in 16-Bit und 64-Bit:

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000 ist zu groß für ein 16-Bit-Fließkommawert, daher wird `Infinity` zurückgegeben:

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
