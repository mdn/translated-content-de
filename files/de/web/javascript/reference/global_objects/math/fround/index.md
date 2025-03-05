---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die statische Methode **`Math.fround()`** gibt die nächstgelegene [32-Bit Einzelpräzision](https://de.wikipedia.org/wiki/Single-Precision-Gleitkommazahl) Fließkommadarstellung einer Zahl zurück.

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

Die nächstgelegene [32-Bit Einzelpräzision](https://de.wikipedia.org/wiki/Single-Precision-Gleitkommazahl) Fließkommadarstellung von `doubleFloat`.

## Beschreibung

JavaScript verwendet intern 64-Bit Gleitkommazahlen mit doppelter Genauigkeit, die eine sehr hohe Präzision bieten. Es kann jedoch vorkommen, dass Sie mit 32-Bit Fließkommazahlen arbeiten, beispielsweise wenn Sie Werte aus einem {{jsxref("Float32Array")}} lesen. Dies kann zu Verwirrung führen: Das Überprüfen der Gleichheit zwischen einem 64-Bit Float und einem 32-Bit Float kann fehlschlagen, auch wenn die Zahlen scheinbar identisch sind.

Um dies zu lösen, kann `Math.fround()` verwendet werden, um den 64-Bit Float in einen 32-Bit Float umzuwandeln. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit Float; es wird lediglich ein "Round to Even" auf das 23. Bit der Mantisse durchgeführt, und alle folgenden Mantissenbits werden auf `0` gesetzt. Wenn die Zahl außerhalb des Bereichs eines 32-Bit Floats liegt, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `fround()` eine statische Methode von `Math` ist, verwenden Sie es immer als `Math.fround()`, anstatt als Methode eines von Ihnen erstellten `Math` Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.fround()

Die Zahl 1.5 kann im binären Zahlensystem genau dargestellt werden und ist identisch in 32-Bit und 64-Bit:

```js
Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
```

Allerdings kann die Zahl 1.337 im binären Zahlensystem nicht genau dargestellt werden und unterscheidet sich daher in 32-Bit und 64-Bit:

```js
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.337) === 1.337; // false
```

<math><semantics><msup><mn>2</mn><mn>150</mn></msup><annotation encoding="TeX">2^150</annotation></semantics></math> ist zu groß für einen 32-Bit Float, daher wird `Infinity` zurückgegeben:

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
