---
title: Math.f16round()
short-title: f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Math.f16round()`** gibt die nächstgelegene [16-Bit-Gleitkommadarstellung mit halber Genauigkeit](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) einer Zahl zurück.

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

Die nächstgelegene [16-Bit-Gleitkommadarstellung mit halber Genauigkeit](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) von `doubleFloat`.

## Beschreibung

`Math.f16round` ist das 16-Bit-Gegenstück zu {{jsxref("Math.fround()")}}. Die Methode soll den Umgang mit float16-Zahlen erleichtern, etwa beim Lesen aus einem {{jsxref("Float16Array")}}. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit-Gleitkommazahl. Es rundet lediglich das 10. Bit der Mantisse auf die nächste gerade Zahl und setzt alle folgenden Mantissenbits auf `0`. Liegt die Zahl außerhalb des Wertebereichs einer 16-Bit-Gleitkommazahl, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `f16round()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.f16round()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Math.f16round() verwenden

Die Zahl 1,5 lässt sich im Binärsystem exakt darstellen und ist in 16 Bit und 64 Bit identisch:

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

Die Zahl 1,337 lässt sich dagegen im Binärsystem nicht exakt darstellen. Daher unterscheidet sich ihre Darstellung in 16 Bit und 64 Bit:

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000 ist zu groß für eine 16-Bit-Gleitkommazahl. Daher wird `Infinity` zurückgegeben:

```js
Math.f16round(100000); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Math.f16round` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- [Polyfill für `Math.f16round` von es-shims](https://www.npmjs.com/package/math.f16round)
- {{jsxref("Math.fround()")}}
- {{jsxref("Math.round()")}}
