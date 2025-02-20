---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Math.clz32()`** gibt die Anzahl der führenden Nullen im 32-Bit-Binärformat einer Zahl zurück.

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

Die Anzahl der führenden Nullen im 32-Bit-Binärformat von `x`.

## Beschreibung

`clz32` steht für **C**ount**L**eading**Z**eros**32**.

Falls `x` keine Zahl ist, wird es zunächst in eine Zahl umgewandelt und anschließend in eine 32-Bit-unsigned-Integer-Zahl konvertiert.

Falls die konvertierte 32-Bit-unsigned-Integer-Zahl `0` ist, wird `32` zurückgegeben, da alle Bits `0` sind. Falls das höchstwertige Bit `1` ist (d.h., die Zahl ist größer oder gleich 2<sup>31</sup>), wird `0` zurückgegeben.

Diese Funktion ist besonders nützlich für Systeme, die in JS kompiliert werden, wie [Emscripten](https://emscripten.org/).

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

### Implementierung von Count Leading Ones und mehr

Derzeit gibt es keine `Math.clon`-Funktion für "Count Leading Ones" (benannt als "clon" und nicht "clo", da "clo" und "clz" für nicht-englischsprachige Personen zu ähnlich sind). Jedoch kann eine `clon`-Funktion leicht erstellt werden, indem die Bits einer Zahl invertiert und das Ergebnis an `Math.clz32` übergeben wird. Dies funktioniert, da das Inverse von 1 gleich 0 ist und umgekehrt. Somit führt das Invertieren der Bits dazu, dass die gemessene Anzahl von Nullen (durch `Math.clz32`) umgekehrt wird, sodass `Math.clz32` die Anzahl der Einsen anstelle der Anzahl der Nullen zählt.

Betrachten Sie das folgende 32-Bit-Wort:

```js
const a = 32776; // 00000000000000001000000000001000 (16 leading zeros)
Math.clz32(a); // 16

const b = ~32776; // 11111111111111110111111111110111 (32776 inverted, 0 leading zeros)
Math.clz32(b); // 0 (this is equal to how many leading one's there are in a)
```

Basierend auf dieser Logik kann eine `clon`-Funktion wie folgt erstellt werden:

```js
const clz = Math.clz32;

function clon(integer) {
  return clz(~integer);
}
```

Darüber hinaus kann diese Technik erweitert werden, um eine sprunglose „Count Trailing Zeros“-Funktion zu erstellen, wie im folgenden Beispiel dargestellt. Die `ctrz`-Funktion nimmt ein bitweises UND der ganzen Zahl mit ihrem Zweierkomplement. Aufgrund der Funktionsweise von Zweierkomplement werden alle nachfolgenden Nullen in Einsen umgewandelt, und wenn man dann 1 hinzufügt, wird der Übertrag bis zum ersten `0` (das ursprünglich ein `1` war) weitergegeben. Alle Bits höher als dieses bleiben gleich und sind Inverse der ursprünglichen Bits der Zahl. Daher werden beim bitweisen UND mit der ursprünglichen Zahl alle höheren Bits `0`, die dann mit `clz` gezählt werden können. Die Anzahl der nachfolgenden Nullen plus das erste `1`-Bit plus die gezählten führenden Bits ergeben zusammen 32.

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

Daraufhin kann eine Funktion "Count Trailing Ones" wie folgt definiert werden:

```js
function ctron(integer) {
  return ctrz(~integer);
}
```

Diese Hilfsfunktionen können in ein [asm.js](/de/docs/Games/Tools/asm.js)-Modul umgesetzt werden, um eine potenzielle Leistungsverbesserung zu erzielen.

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
