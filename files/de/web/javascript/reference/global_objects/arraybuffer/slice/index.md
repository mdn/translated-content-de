---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("ArrayBuffer")}}-Instanzen gibt ein neues `ArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `ArrayBuffer` von `start` (einschließlich) bis `end` (ausschließlich) ist. Wenn `start` oder `end` negativ sind, beziehen sie sich auf einen Index vom Ende des Arrays aus, anstatt vom Anfang.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.slice()")}}

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
  - : Der nullbasierte Index, an dem die Extraktion beginnt, [konvertiert in eine ganze Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts vom Ende des Buffers — wenn `-buffer.length <= start < 0`, wird `start + buffer.length` verwendet.
    - Wenn `start < -buffer.length` oder `start` ausgelassen wird, wird `0` verwendet.
    - Wenn `start >= buffer.length` ist, wird ein leerer Buffer zurückgegeben.
- `end` {{optional_inline}}
  - : Der nullbasierte Index, an dem die Extraktion endet, [konvertiert in eine ganze Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt rückwärts vom Ende des Buffers — wenn `-buffer.length <= end < 0`, wird `end + buffer.length` verwendet.
    - Wenn `end < -buffer.length` ist, wird `0` verwendet.
    - Wenn `end >= buffer.length` oder `end` ausgelassen wird, wird `buffer.length` verwendet, wodurch alle Elemente bis zum Ende extrahiert werden.
    - Wenn `end` eine Position impliziert, die vor oder an der Position liegt, die `start` impliziert, wird ein leerer Buffer zurückgegeben.

### Rückgabewert

Ein neues {{jsxref("ArrayBuffer")}}, das die extrahierten Elemente enthält. Es ist nicht [veränderbar](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable), selbst wenn das Original veränderbar war.

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
