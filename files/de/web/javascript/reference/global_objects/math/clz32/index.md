---
title: Math.clz32()
short-title: clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Math.clz32()`** gibt die Anzahl der führenden Nullbits in der 32-Bit-Binärdarstellung einer Zahl zurück.

{{InteractiveExample("JavaScript Demo: Math.clz32()")}}

```js interactive-example
// 00000000000000000000000000000001
console.log(Math.clz32(1));
// Expected output: 31

// 00000000000000000000000000000100
console.log(Math.clz32(4));
// Expected output: 29

// 00000000000000000000001111101000
console.log(Math.clz32(1000));
// Expected output: 22
```

## Syntax

```js-nolint
Math.clz32(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Die Anzahl der führenden Nullbits in der 32-Bit-Binärdarstellung von `x`.

## Beschreibung

`clz32` ist die Abkürzung für **C**ount**L**eading**Z**eros**32** (führende Nullen zählen).

Wenn `x` keine Zahl ist, wird der Wert zuerst in eine Zahl und anschließend in eine vorzeichenlose 32-Bit-Ganzzahl umgewandelt.

Wenn die umgewandelte vorzeichenlose 32-Bit-Ganzzahl `0` ist, wird `32` zurückgegeben, da alle Bits `0` sind. Wenn das höchstwertige Bit `1` ist (d.h. die Zahl größer oder gleich 2<sup>31</sup> ist), wird `0` zurückgegeben.

Diese Funktion ist besonders nützlich für Systeme, die nach JS kompilieren, wie [Emscripten](https://emscripten.org/).

## Beispiele

### Math.clz32() verwenden

```js
Math.clz32(1); // 31
Math.clz32(1000); // 22
Math.clz32(); // 32

const stuff = [
  NaN,
  Infinity,
  -Infinity,
  0,
  -0,
  false,
  null,
  undefined,
  "foo",
  {},
  [],
];
stuff.every((n) => Math.clz32(n) === 32); // true

Math.clz32(true); // 31
Math.clz32(3.5); // 30
```

### Führende Einsen zählen und weitere Funktionen implementieren

Derzeit gibt es kein `Math.clon` für „Count Leading Ones“ (führende Einsen zählen). Der Name wäre „clon“ und nicht „clo“, weil „clo“ und „clz“ einander zu ähnlich sind, insbesondere für Menschen, deren Muttersprache nicht Englisch ist. Eine `clon`-Funktion lässt sich jedoch leicht erstellen, indem die Bits einer Zahl invertiert und das Ergebnis an `Math.clz32` übergeben wird. Das funktioniert, weil die Invertierung von 1 den Wert 0 ergibt und umgekehrt. Durch das Invertieren der Bits zählt `Math.clz32` somit die Einsen statt der Nullen.

Betrachten Sie das folgende 32-Bit-Wort:

```js
const a = 32776; // 00000000000000001000000000001000 (16 leading zeros)
Math.clz32(a); // 16

const b = ~32776; // 11111111111111110111111111110111 (32776 inverted, 0 leading zeros)
Math.clz32(b); // 0 (this is equal to how many leading one's there are in a)
```

Nach diesem Prinzip lässt sich eine `clon`-Funktion wie folgt erstellen:

```js
const clz = Math.clz32;

function clon(integer) {
  return clz(~integer);
}
```

Mit dieser Technik lässt sich auch eine Funktion zum Zählen nachgestellter Nullen („Count Trailing Zeros“) ohne Sprunganweisungen erstellen, wie unten gezeigt. Die Funktion `ctrz` verknüpft die Ganzzahl bitweise mit ihrem Zweierkomplement durch AND. Aufgrund der Funktionsweise des Zweierkomplements werden alle nachgestellten Nullen in Einsen umgewandelt. Beim anschließenden Addieren von 1 wird der Übertrag bis zur ersten `0` weitergegeben, die ursprünglich eine `1` war. Alle höherwertigen Bits bleiben dabei unverändert und sind die invertierten Bits der ursprünglichen Ganzzahl. Bei einer bitweisen AND-Verknüpfung mit der ursprünglichen Ganzzahl werden daher alle höherwertigen Bits zu `0` und können mit `clz` gezählt werden. Die Anzahl der nachgestellten Nullen, das erste `1`-Bit und die mit `clz` gezählten führenden Bits ergeben zusammen 32.

```js
function ctrz(integer) {
  integer >>>= 0; // coerce to Uint32
  if (integer === 0) {
    // skipping this step would make it return -1
    return 32;
  }
  integer &= -integer; // equivalent to `int = int & (~int + 1)`
  return 31 - clz(integer);
}
```

Anschließend können wir eine Funktion zum Zählen nachgestellter Einsen („Count Trailing Ones“) wie folgt definieren:

```js
function ctron(integer) {
  return ctrz(~integer);
}
```

Diese Hilfsfunktionen können zu einem [asm.js](/de/docs/Games/Tools/asm.js)-Modul zusammengefasst werden, um möglicherweise die Leistung zu verbessern.

```js
const countTrailsMethods = (function (stdlib, foreign, heap) {
  "use asm";
  const clz = stdlib.Math.clz32;

  // count trailing zeros
  function ctrz(integer) {
    integer = integer | 0; // coerce to an integer
    if ((integer | 0) == 0) {
      // skipping this step would make it return -1
      return 32;
    }
    // Note: asm.js doesn't have compound assignment operators such as &=
    integer = integer & -integer; // equivalent to `int = int & (~int + 1)`
    return (31 - clz(integer)) | 0;
  }

  // count trailing ones
  function ctron(integer) {
    integer = integer | 0; // coerce to an integer
    return ctrz(~integer) | 0;
  }

  // asm.js demands plain objects:
  return { ctrz: ctrz, ctron: ctron };
})(window, null, null);

const { ctrz, ctron } = countTrailsMethods;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Math.clz32` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- [Polyfill für `Math.clz32` von es-shims](https://www.npmjs.com/package/math.clz32)
- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
