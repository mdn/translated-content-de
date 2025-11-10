---
title: ArrayBuffer.prototype.slice()
short-title: slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`slice()`**-Methode von {{jsxref("ArrayBuffer")}} Instanzen gibt einen neuen `ArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `ArrayBuffer` von `start`, inklusive, bis `end`, exklusiv, ist. Wenn entweder `start` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, im Gegensatz zum Anfang.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.prototype.slice()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
// Produces Int32Array [0, 0, 0, 0]

int32View[1] = 42;
const sliced = new Int32Array(buffer.slice(4, 12));
// Produces Int32Array [42, 0]

console.log(sliced[0]);
// Expected output: 42
```

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Index, bei dem die Extraktion beginnen soll, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Puffers zurück — wenn `-buffer.length <= start < 0`, wird `start + buffer.length` verwendet.
    - Wenn `start < -buffer.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= buffer.length`, wird ein leerer Puffer zurückgegeben.
- `end` {{optional_inline}}
  - : Index, bei dem die Extraktion enden soll, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Puffers zurück — wenn `-buffer.length <= end < 0`, wird `end + buffer.length` verwendet.
    - Wenn `end < -buffer.length`, wird `0` verwendet.
    - Wenn `end >= buffer.length` oder `end` weggelassen wird oder `undefined` ist, wird `buffer.length` verwendet, was dazu führt, dass alle Elemente bis zum Ende extrahiert werden.
    - Wenn `end` eine Position vor oder an der Position impliziert, die `start` impliziert, wird ein leerer Puffer zurückgegeben.

### Rückgabewert

Ein neuer {{jsxref("ArrayBuffer")}}, der die extrahierten Elemente enthält. Er ist nicht [resizable](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable), selbst wenn das Original es war.

## Beispiele

### Kopieren eines ArrayBuffer

```js
const buf1 = new ArrayBuffer(8);
const buf2 = buf1.slice(0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
