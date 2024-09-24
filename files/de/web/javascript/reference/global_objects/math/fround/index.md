---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

Die **`Math.fround()`**-statische Methode gibt die nächstgelegene [32-Bit-Einzelpräzision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) Fließkommadarstellung einer Zahl zurück.

{{EmbedInteractiveExample("pages/js/math-fround.html")}}

## Syntax

```js-nolint
Math.fround(doubleFloat)
```

### Parameter

- `doubleFloat`
  - : Eine Zahl.

### Rückgabewert

Die nächstgelegene [32-Bit-Einzelpräzision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) Fließkommadarstellung von `doubleFloat`.

## Beschreibung

JavaScript verwendet intern 64-Bit-Doppel-Fließkommazahlen, die eine sehr hohe Präzision bieten. Manchmal arbeiten Sie jedoch mit 32-Bit-Fließkommazahlen, zum Beispiel wenn Sie Werte aus einem {{jsxref("Float32Array")}} lesen. Dies kann Verwirrung stiften: Der Vergleich einer 64-Bit- und einer 32-Bit-Fließkommazahl auf Gleichheit kann fehlschlagen, auch wenn die Zahlen scheinbar identisch sind.

Um dieses Problem zu lösen, kann `Math.fround()` verwendet werden, um die 64-Bit-Fließkommazahl in eine 32-Bit-Fließkommazahl zu konvertieren. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit-Fließkomma, es wird lediglich ein "Rundung auf gerade" auf das 23. Bit der Mantisse durchgeführt, und alle folgenden Mantissen-Bits werden auf `0` gesetzt. Wenn die Zahl außerhalb des Bereichs einer 32-Bit-Fließkommazahl liegt, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `fround()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.fround()`, anstatt als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.fround()

Die Zahl 1.5 kann im binären Zahlensystem genau dargestellt werden und ist in 32 Bit und 64 Bit identisch:

```js
Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
```

Die Zahl 1.337 kann im binären Zahlensystem jedoch nicht genau dargestellt werden, sodass sie sich in 32 Bit und 64 Bit unterscheidet:

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
- {{jsxref("Math.round()")}}
