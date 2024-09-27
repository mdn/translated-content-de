---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{JSRef}}

Die statische Methode **`Math.clz32()`** gibt die Anzahl der führenden Nullbits in der 32-Bit-Binärdarstellung einer Zahl zurück.

{{EmbedInteractiveExample("pages/js/math-clz32.html")}}

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

`clz32` ist eine Abkürzung für **C**ount**L**eading**Z**eros**32**.

Wenn `x` keine Zahl ist, wird es zuerst in eine Zahl umgewandelt und dann in eine 32-Bit-ungesigned-Integer umgewandelt.

Wenn das konvertierte 32-Bit-ungesigned-Integer `0` ist, wird `32` zurückgegeben, da alle Bits `0` sind. Wenn das höchstwertige Bit `1` ist (d. h. die Zahl ist größer oder gleich 2<sup>31</sup>), wird `0` zurückgegeben.

Diese Funktion ist besonders nützlich für Systeme, die nach JS kompilieren, wie [Emscripten](https://emscripten.org/).

## Beispiele

### Verwendung von Math.clz32()

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

### Implementierung von "Count Leading Ones" und mehr

Derzeit gibt es kein `Math.clon` für "Count Leading Ones" (genannt "clon", nicht "clo", weil "clo" und "clz" besonders für Nicht-Englisch-Sprechende zu ähnlich sind). Es kann jedoch eine `clon`-Funktion leicht erstellt werden, indem die Bits einer Zahl invertiert und das Ergebnis an `Math.clz32` übergeben wird. Dies funktioniert, weil das Inverse von 1 gleich 0 ist und umgekehrt. Daher wird durch das Invertieren der Bits die gemessene Anzahl der 0en (von `Math.clz32`) invertiert, wodurch `Math.clz32` die Anzahl der Einsen anstatt der Nullen zählt.

Betrachten Sie das folgende 32-Bit-Wort:

```js
const a = 32776; // 00000000000000001000000000001000 (16 leading zeros)
Math.clz32(a); // 16

const b = ~32776; // 11111111111111110111111111110111 (32776 inverted, 0 leading zeros)
Math.clz32(b); // 0 (this is equal to how many leading one's there are in a)
```

Mit dieser Logik kann eine `clon`-Funktion wie folgt erstellt werden:

```js
const clz = Math.clz32;

function clon(integer) {
  return clz(~integer);
}
```

Weiterhin könnte diese Technik erweitert werden, um eine sprunglose "Count Trailing Zeros"-Funktion zu erstellen, wie unten zu sehen. Die `ctrz`-Funktion bildet ein bitweises UND des Integers mit seinem Zweierkomplement. Durch die Arbeitsweise des Zweierkomplements werden alle nachfolgenden Nullen in Einsen umgewandelt, und dann, wenn 1 hinzugefügt wird, erfolgt eine Übertragung, bis das erste `0` (das ursprünglich `1` war) erreicht wird. Alle höherwertigen Bits bleiben gleich und sind Inverse der ursprünglichen Bits des Integers. Daher, wenn das bitweise UND mit dem ursprünglichen Integer durchgeführt wird, werden alle höheren Bits `0`, die mit `clz` gezählt werden können. Die Anzahl der nachlaufenden Nullen plus das erste `1`-Bit plus die führenden Bits, die von `clz` gezählt wurden, ergeben zusammen 32.

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

Dann können wir eine "Count Trailing Ones"-Funktion wie folgt definieren:

```js
function ctron(integer) {
  return ctrz(~integer);
}
```

Diese Hilfsfunktionen können in ein [asm.js](/de/docs/Games/Tools/asm.js)-Modul umgewandelt werden, um eine potenzielle Leistungsverbesserung zu erzielen.

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

- [Polyfill von `Math.clz32` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
