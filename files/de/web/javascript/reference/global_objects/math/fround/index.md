---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Math.fround()`** gibt die nächstliegende [32-Bit Gleitkomma](https://de.wikipedia.org/wiki/Einfachgenau#32-Bit-Gleitkomma)-Darstellung einer Zahl zurück.

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

Die nächstliegende [32-Bit Gleitkomma](https://de.wikipedia.org/wiki/Einfachgenau#32-Bit-Gleitkomma)-Darstellung von `doubleFloat`.

## Beschreibung

JavaScript verwendet intern 64-Bit Gleitkomma-Zahlen, die eine sehr hohe Präzision bieten. Es kann jedoch vorkommen, dass Sie mit 32-Bit Gleitkomma-Zahlen arbeiten, z. B. wenn Sie Werte aus einem {{jsxref("Float32Array")}} lesen. Dies kann Verwirrung stiften: Ein Vergleich einer 64-Bit-Gleitkommazahl mit einer 32-Bit-Gleitkommazahl kann fehlschlagen, selbst wenn die Zahlen scheinbar identisch sind.

Um dieses Problem zu lösen, kann `Math.fround()` verwendet werden, um eine 64-Bit-Gleitkommazahl in eine 32-Bit-Gleitkommazahl umzuwandeln. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit-Gleitkommazahl und führt lediglich ein "Runden auf gerade" an der 23. Stelle der Mantisse durch und setzt alle nachfolgenden Mantissen-Bits auf `0`. Wenn die Zahl außerhalb des Bereichs einer 32-Bit-Gleitkommazahl liegt, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `fround()` eine statische Methode von `Math` ist, verwenden Sie es immer als `Math.fround()` und nicht als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.fround()

Die Zahl 1.5 kann im binären Zahlensystem präzise dargestellt werden und ist in 32-Bit und 64-Bit identisch:

```js
Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
```

Die Zahl 1.337 kann jedoch im binären Zahlensystem nicht präzise dargestellt werden, daher unterscheidet sie sich in 32-Bit und 64-Bit:

```js
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.337) === 1.337; // false
```

<math><semantics><msup><mn>2</mn><mn>150</mn></msup><annotation encoding="TeX">2^150</annotation></semantics></math> ist zu groß für eine 32-Bit-Gleitkommazahl, daher wird `Infinity` zurückgegeben:

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
- {{jsxref("Math.round()")}}
