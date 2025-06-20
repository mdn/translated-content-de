---
title: Math.clz32()
short-title: clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`Math.clz32()`** statische Methode gibt die Anzahl der führenden Nullbits in der 32-Bit-Binärdarstellung einer Zahl zurück.

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

`clz32` ist die Abkürzung für **C**ount**L**eading**Z**eros**32**.

Wenn `x` keine Zahl ist, wird es zuerst in eine Zahl umgewandelt und dann in eine 32-Bit-unsigned Integer.

Wenn die umgewandelte 32-Bit-unsigned Ganzzahl `0` ist, wird `32` zurückgegeben, da alle Bits `0` sind. Wenn das höchstwertige Bit `1` ist (d.h. die Zahl ist größer oder gleich 2<sup>31</sup>), wird `0` zurückgegeben.

Diese Funktion ist besonders nützlich für Systeme, die nach JS kompiliert werden, wie [Emscripten](https://emscripten.org/).

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

### Implementierung von Count Leading Ones und darüber hinaus

Zurzeit gibt es kein `Math.clon` für "Count Leading Ones" (benannt als "clon", nicht "clo", da "clo" und "clz" besonders für nicht-englischsprachige Personen zu ähnlich sind). Eine `clon`-Funktion kann jedoch leicht erstellt werden, indem die Bits einer Zahl invertiert und das Ergebnis an `Math.clz32` übergeben wird. Dies funktioniert, weil das Inverse von 1 gleich 0 ist und umgekehrt. Somit wird durch das Invertieren der Bits die gemessene Anzahl von 0en (von `Math.clz32`) umgekehrt, wodurch `Math.clz32` die Anzahl der Einsen zählt, anstatt die Anzahl der Nullen.

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

Des Weiteren könnte diese Technik erweitert werden, um eine sprunglose "Count Trailing Zeros"-Funktion zu erstellen, wie unten zu sehen. Die `ctrz`-Funktion nimmt ein bitweises UND der Ganzzahl mit ihrem Zweierkomplement. Gemäß der Funktionsweise des Zweierkomplements werden alle nachlaufenden Nullen zu Einsen konvertiert, und wenn dann eine 1 hinzugefügt wird, wird sie bis zur ersten `0` (die ursprünglich eine `1` war) übertragen. Alle darüber liegenden Bits bleiben gleich und sind Inverse der Bits der ursprünglichen Ganzzahl. Daher, wenn ein bitweises UND mit der ursprünglichen Ganzzahl gemacht wird, werden alle höheren Bits `0`, was mit `clz` gezählt werden kann. Die Anzahl der nachlaufenden Nullen, plus das erste `1`-Bit, plus die führenden Bits, die von `clz` gezählt wurden, summieren sich insgesamt auf 32.

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

Dann können wir eine "Count Trailing Ones"-Funktion folgendermaßen definieren:

```js
function ctron(integer) {
  return ctrz(~integer);
}
```

Diese Hilfsfunktionen können in ein [asm.js](/de/docs/Games/Tools/asm.js)-Modul eingebunden werden für eine mögliche Leistungsverbesserung.

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
- [es-shims Polyfill von `Math.clz32`](https://www.npmjs.com/package/math.clz32)
- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
