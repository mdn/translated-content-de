---
title: Math.fround()
short-title: fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Math.fround()`** gibt die nächstgelegene [32-Bit-Gleitkommadarstellung mit einfacher Genauigkeit](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) einer Zahl zurück.

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

Die nächstgelegene [32-Bit-Gleitkommadarstellung mit einfacher Genauigkeit](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) von `doubleFloat`.

## Beschreibung

JavaScript verwendet intern 64-Bit-Gleitkommazahlen mit doppelter Genauigkeit, die eine sehr hohe Präzision bieten. Manchmal arbeiten Sie jedoch mit 32-Bit-Gleitkommazahlen, beispielsweise wenn Sie Werte aus einem {{jsxref("Float32Array")}} lesen. Das kann zu Verwirrung führen: Ein Vergleich einer 64-Bit- und einer 32-Bit-Gleitkommazahl auf Gleichheit kann fehlschlagen, obwohl die Zahlen scheinbar identisch sind.

Um dieses Problem zu lösen, können Sie mit `Math.fround()` eine 64-Bit-Gleitkommazahl in eine 32-Bit-Gleitkommazahl umwandeln. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit-Gleitkommazahl. Es rundet lediglich am 23. Bit der Mantisse nach der Regel „zur nächsten geraden Zahl“ und setzt alle folgenden Mantissenbits auf `0`. Liegt die Zahl außerhalb des Wertebereichs einer 32-Bit-Gleitkommazahl, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `fround()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.fround()` und nicht als Methode eines selbst erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Math.fround() verwenden

Die Zahl 1,5 lässt sich im Binärsystem exakt darstellen und ist in der 32-Bit- und der 64-Bit-Darstellung identisch:

```js
Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
```

Die Zahl 1,337 lässt sich dagegen im Binärsystem nicht exakt darstellen. Daher unterscheidet sich ihre 32-Bit-Darstellung von ihrer 64-Bit-Darstellung:

```js
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.337) === 1.337; // false
```

<math><semantics><msup><mn>2</mn><mn>150</mn></msup><annotation encoding="TeX">2^150</annotation></semantics></math> ist für eine 32-Bit-Gleitkommazahl zu groß. Daher wird `Infinity` zurückgegeben:

```js
2 ** 150; // 1.42724769270596e+45
Math.fround(2 ** 150); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Math.fround` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- [Polyfill für `Math.fround` von es-shims](https://www.npmjs.com/package/math.fround)
- {{jsxref("Math.round()")}}
