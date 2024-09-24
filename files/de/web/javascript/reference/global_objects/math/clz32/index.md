---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{JSRef}}

Die statische Methode **`Math.clz32()`** gibt die Anzahl der führenden Nullen im 32-Bit-Binärformat einer Zahl zurück.

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

`clz32` steht für **C**ount **L**eading **Z**eros **32**.

Wenn `x` keine Zahl ist, wird sie zuerst in eine Zahl umgewandelt und dann in eine 32-Bit-Unsigned-Integer konvertiert.

Wenn das umgewandelte 32-Bit-Unsigned-Integer `0` ist, wird `32` zurückgegeben, da alle Bits `0` sind. Wenn das höchstwertige Bit `1` ist (d.h. die Zahl ist größer oder gleich 2<sup>31</sup>), wird `0` zurückgegeben.

Diese Funktion ist besonders nützlich für Systeme, die in JS kompilieren, wie [Emscripten](https://emscripten.org/).

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

Derzeit gibt es kein `Math.clon` für "Count Leading Ones" (genannt "clon", nicht "clo", da "clo" und "clz" vor allem für Nicht-Englischsprachige zu ähnlich sind). Eine `clon`-Funktion kann jedoch leicht erstellt werden, indem die Bits einer Zahl invertiert und das Ergebnis an `Math.clz32` übergeben wird. Dies funktioniert, weil das Inverse von 1 gleich 0 ist und umgekehrt. Daher wird durch das Invertieren der Bits die Menge der 0en (von `Math.clz32`) invertiert, wodurch `Math.clz32` die Anzahl der Einsen anstelle der Anzahl der Nullen zählt.

Betrachten Sie das folgende 32-Bit-Wort:

```js
const a = 32776; // 00000000000000001000000000001000 (16 führende Nullen)
Math.clz32(a); // 16

const b = ~32776; // 11111111111111110111111111110111 (32776 invertiert, 0 führende Nullen)
Math.clz32(b); // 0 (das entspricht, wie viele führende Einsen es in a gibt)
```

Mithilfe dieser Logik kann eine `clon`-Funktion wie folgt erstellt werden:

```js
const clz = Math.clz32;

function clon(integer) {
  return clz(~integer);
}
```

Darüber hinaus könnte diese Technik erweitert werden, um eine sprungslose "Count Trailing Zeros"-Funktion zu erstellen, wie unten gezeigt. Die `ctrz`-Funktion nimmt ein bitweises UND des Integers mit seinem Zwei-Komplement. Durch die Arbeitsweise des Zwei-Komplements werden alle nachgestellten Nullen in Einsen umgewandelt, und wenn man 1 hinzufügt, wird es bis zur ersten `0` (die ursprünglich eine `1` war) übertragen. Alle höheren Bits bleiben gleich und sind Inverswerte der ursprünglichen Bits des Integers. Daher werden bei einem bitweisen UND mit dem ursprünglichen Integer alle höheren Bits `0`, die mit `clz` gezählt werden können. Die Anzahl der nachgestellten Nullen, plus das erste `1`-Bit, plus die führenden Bits, die von `clz` gezählt wurden, ergibt insgesamt 32.

```js
function ctrz(integer) {
  integer >>>= 0; // Umwandlung in Uint32
  if (integer === 0) {
    // das Überspringen dieses Schrittes würde -1 zurückgeben
    return 32;
  }
  integer &= -integer; // entspricht `int = int & (~int + 1)`
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

  // Nachgestellte Nullen zählen
  function ctrz(integer) {
    integer = integer | 0; // Umwandlung in einen Integer
    if ((integer | 0) == 0) {
      // das Überspringen dieses Schrittes würde -1 zurückgeben
      return 32;
    }
    // Hinweis: asm.js verwendet keine zusammengesetzten Zuweisungsoperatoren wie &=
    integer = integer & -integer; // entspricht `int = int & (~int + 1)`
    return (31 - clz(integer)) | 0;
  }

  // Nachgestellte Einsen zählen
  function ctron(integer) {
    integer = integer | 0; // Umwandlung in einen Integer
    return ctrz(~integer) | 0;
  }

  // asm.js fordert einfache Objekte:
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
