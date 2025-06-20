---
title: Math.f16round()
short-title: f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Math.f16round()`** gibt die nächstgelegene [16-Bit-Halbpräzisions-](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) Float-Darstellung einer Zahl zurück.

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

Die nächstgelegene [16-Bit-Halbpräzisions-](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) Float-Darstellung von `doubleFloat`.

## Beschreibung

`Math.f16round` ist das 16-Bit-Gegenstück zu {{jsxref("Math.fround()")}}. Es soll einige Unschärfen beim Umgang mit Float16-Zahlen glätten, zum Beispiel beim Lesen aus einem {{jsxref("Float16Array")}}. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit-Float, es führt lediglich ein "Rundung-auf-eben" auf das 10. Bit der Mantisse durch und setzt alle folgenden Mantissenbits auf `0`. Wenn die Zahl außerhalb des Bereichs eines 16-Bit-Floats liegt, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `f16round()` eine statische Methode von `Math` ist, verwenden Sie es immer als `Math.f16round()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.f16round()

Die Zahl 1.5 kann im binären Zahlensystem genau dargestellt werden und ist in 16-Bit und 64-Bit identisch:

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

Jedoch kann die Zahl 1.337 im binären Zahlensystem nicht exakt dargestellt werden, sodass sie sich in 16-Bit und 64-Bit unterscheidet:

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000 ist zu groß für einen 16-Bit-Float, deshalb wird `Infinity` zurückgegeben:

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
