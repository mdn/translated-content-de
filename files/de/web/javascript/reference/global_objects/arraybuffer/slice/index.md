---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("ArrayBuffer")}}-Instanzen gibt ein neues `ArrayBuffer` zurück, dessen Inhalte eine Kopie der Bytes dieses `ArrayBuffer` von `start` (einschließlich) bis `end` (ausschließlich) sind. Wenn `start` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, anstatt vom Anfang.

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
  - : Der nullbasierte Index, bei dem die Extraktion beginnt, [in eine ganze Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Puffers zurück — wenn `-buffer.length <= start < 0`, wird `start + buffer.length` verwendet.
    - Wenn `start < -buffer.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= buffer.length`, wird ein leerer Puffer zurückgegeben.
- `end` {{optional_inline}}
  - : Der nullbasierte Index, bei dem die Extraktion endet, [in eine ganze Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Puffers zurück — wenn `-buffer.length <= end < 0`, wird `end + buffer.length` verwendet.
    - Wenn `end < -buffer.length`, wird `0` verwendet.
    - Wenn `end >= buffer.length` oder `end` weggelassen wird, wird `buffer.length` verwendet, was bewirkt, dass alle Elemente bis zum Ende extrahiert werden.
    - Wenn `end` eine Position vor oder an der von `start` implizierten Position angibt, wird ein leerer Puffer zurückgegeben.

### Rückgabewert

Ein neues {{jsxref("ArrayBuffer")}}, das die extrahierten Elemente enthält. Es ist nicht [größenveränderbar](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable), selbst wenn das Original es war.

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
