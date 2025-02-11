---
title: Math.f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Math.f16round()`**-statische Methode gibt die nächste [16-Bit-Halbpräzisions](https://en.wikipedia.org/wiki/Half-precision_floating-point_format)-Fließkommadarstellung einer Zahl zurück.

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

Die nächste [16-Bit-Halbpräzisions](https://en.wikipedia.org/wiki/Half-precision_floating-point_format)-Fließkommadarstellung von `doubleFloat`.

## Beschreibung

`Math.f16round` ist das 16-Bit-Pendant zu {{jsxref("Math.fround()")}}. Es soll einige Schwierigkeiten beim Arbeiten mit float16-Zahlen glätten, wie z. B. beim Lesen aus einem {{jsxref("Float16Array")}}. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit-Fließkommazahl. Es führt lediglich ein "Round to Even" auf der 10. Stelle der Mantisse durch und setzt alle folgenden Mantissen-Bits auf `0`. Befindet sich die Zahl außerhalb des Bereichs eines 16-Bit-Fließkommazahlformats, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `f16round()` eine statische Methode von `Math` ist, wird sie immer als `Math.f16round()` verwendet und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.f16round()

Die Zahl 1.5 kann im binären Zahlensystem genau dargestellt werden und ist identisch in 16-Bit und 64-Bit:

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

Die Zahl 1.337 kann jedoch im binären Zahlensystem nicht genau dargestellt werden, daher unterscheidet sie sich in 16-Bit und 64-Bit:

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000 ist zu groß für ein 16-Bit-Fließkommazahlformat, daher wird `Infinity` zurückgegeben:

```js
Math.f16round(100000); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.f16round` in `core-js`](https://github.com/zloirock/core-js#float16-methods)
- {{jsxref("Math.fround()")}}
- {{jsxref("Math.round()")}}
