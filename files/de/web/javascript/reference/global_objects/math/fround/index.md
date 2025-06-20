---
title: Math.fround()
short-title: fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Math.fround()`** gibt die nächstliegende [32-Bit-Einzelpräzision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) Fließkommadarstellung einer Zahl zurück.

{{InteractiveExample("JavaScript Demo: Math.fround()")}}

```js interactive-example
console.log(Math.fround(5.5));
// Expected output: 5.5

console.log(Math.fround(5.05));
// Expected output: 5.050000190734863

console.log(Math.fround(5));
// Expected output: 5

console.log(Math.fround(-5.05));
// Expected output: -5.050000190734863
```

## Syntax

```js-nolint
Math.fround(doubleFloat)
```

### Parameter

- `doubleFloat`
  - : Eine Zahl.

### Rückgabewert

Die nächstliegende [32-Bit-Einzelpräzision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) Fließkommadarstellung von `doubleFloat`.

## Beschreibung

JavaScript verwendet intern 64-Bit-Doppelfließkommazahlen, die eine sehr hohe Präzision bieten. Manchmal arbeiten Sie jedoch mit 32-Bit-Fließkommazahlen, beispielsweise wenn Sie Werte aus einem {{jsxref("Float32Array")}} lesen. Dies kann Verwirrung stiften: Der Vergleich zwischen einer 64-Bit- und einer 32-Bit-Fließkommazahl auf Gleichheit kann fehlschlagen, selbst wenn die Zahlen scheinbar identisch sind.

Um dies zu lösen, kann `Math.fround()` verwendet werden, um die 64-Bit-Fließkommazahl in eine 32-Bit-Fließkommazahl zu konvertieren. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit-Fließkommazahl, es führt lediglich ein "round to even" auf dem 23. Bit der Mantisse durch und setzt alle folgenden Mantissabits auf `0`. Wenn die Zahl außerhalb des Bereichs einer 32-Bit-Fließkommazahl liegt, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `fround()` eine statische Methode von `Math` ist, wird sie immer als `Math.fround()` verwendet und nicht als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.fround()

Die Zahl 1.5 kann im binären Zahlensystem präzise dargestellt werden und ist in 32-Bit und 64-Bit identisch:

```js
Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
```

Die Zahl 1.337 hingegen kann im binären Zahlensystem nicht präzise dargestellt werden, daher unterscheidet sie sich in 32-Bit und 64-Bit:

```js
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.337) === 1.337; // false
```

<math><semantics><msup><mn>2</mn><mn>150</mn></msup><annotation encoding="TeX">2^150</annotation></semantics></math> ist zu groß für eine 32-Bit-Fließkommazahl, daher wird `Infinity` zurückgegeben:

```js
2 ** 150; // 1.42724769270596e+45
Math.fround(2 ** 150); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.fround` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [es-shims polyfill von `Math.fround`](https://www.npmjs.com/package/math.fround)
- {{jsxref("Math.round()")}}
