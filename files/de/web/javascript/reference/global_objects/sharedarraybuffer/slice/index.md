---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
l10n:
  sourceCommit: 8166ab356cccb30af5e0ad912815d19100249e17
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("SharedArrayBuffer")}}-Instanzen gibt einen neuen `SharedArrayBuffer` zurück, dessen Inhalte eine Kopie der Bytes dieses `SharedArrayBuffer` von `start` (einschließlich) bis `end` (ausschließlich) sind. Wenn entweder `start` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays anstelle vom Anfang.

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer.prototype.slice()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const int32View = new Int32Array(buffer); // Create the view
// Produces Int32Array [0, 0, 0, 0]

int32View[1] = 42;
const sliced = new Int32Array(buffer.slice(4, 12));

console.log(sliced);
// Expected output: Int32Array [42, 0]
```

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Der nullbasierte Index, an dem die Extraktion beginnen soll, [umgewandelt in eine ganze Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Buffers zurück — Wenn `-buffer.length <= start < 0`, wird `start + buffer.length` verwendet.
    - Wenn `start < -buffer.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= buffer.length`, wird ein leerer Buffer zurückgegeben.
- `end` {{optional_inline}}
  - : Der nullbasierte Index, an dem die Extraktion enden soll, [umgewandelt in eine ganze Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Buffers zurück — Wenn `-buffer.length <= end < 0`, wird `end + buffer.length` verwendet.
    - Wenn `end < -buffer.length`, wird `0` verwendet.
    - Wenn `end >= buffer.length` oder `end` weggelassen oder `undefined` ist, wird `buffer.length` verwendet, wodurch alle Elemente bis zum Ende extrahiert werden.
    - Wenn `end` eine Position vor oder an der Position impliziert, die `start` impliziert, wird ein leerer Buffer zurückgegeben.

### Rückgabewert

Ein neuer {{jsxref("SharedArrayBuffer")}}, der die extrahierten Elemente enthält.

## Beispiele

### Verwendung von slice()

```js
const sab = new SharedArrayBuffer(1024);
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.slice()")}}
