---
title: Math.fround()
short-title: fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Math.fround()`** statische Methode gibt die nächstgelegene [32-Bit-Einzelpräzisions-](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) Fließkommadarstellung einer Zahl zurück.

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

Die nächstgelegene [32-Bit-Einzelpräzisions-](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) Fließkommadarstellung von `doubleFloat`.

## Beschreibung

JavaScript verwendet intern 64-Bit-Doppelpräzisions-Fließkommazahlen, die eine sehr hohe Präzision bieten. Allerdings kann es manchmal vorkommen, dass Sie mit 32-Bit-Fließkommazahlen arbeiten, zum Beispiel wenn Sie Werte aus einem {{jsxref("Float32Array")}} lesen. Dies kann zu Verwirrung führen: das Überprüfen auf Gleichheit zwischen einer 64-Bit- und einer 32-Bit-Fließkommazahl kann fehlschlagen, obwohl die Zahlen scheinbar identisch sind.

Um das zu lösen, kann `Math.fround()` genutzt werden, um die 64-Bit-Fließkommazahl in eine 32-Bit-Fließkommazahl umzuwandeln. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit-Fließkommazahl, es wird lediglich eine "Rundung auf gerade" an der 23. Stelle der Mantisse durchgeführt und alle folgenden Mantissen-Bits werden auf `0` gesetzt. Liegt die Zahl außerhalb des Bereichs einer 32-Bit-Fließkommazahl, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `fround()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.fround()` und nicht als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.fround()

Die Zahl 1.5 kann im binären Zahlensystem exakt dargestellt werden und ist in 32-Bit und 64-Bit identisch:

```js
Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
```

Allerdings kann die Zahl 1.337 im binären Zahlensystem nicht exakt dargestellt werden, daher unterscheidet sie sich in 32-Bit und 64-Bit:

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
- [es-shims Polyfill von `Math.fround`](https://www.npmjs.com/package/math.fround)
- {{jsxref("Math.round()")}}
