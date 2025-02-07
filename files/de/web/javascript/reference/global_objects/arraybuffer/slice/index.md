---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
l10n:
  sourceCommit: 6b6e8ebdf4917532480e0fee7896514f7212bcdb
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("ArrayBuffer")}}-Instanzen gibt einen neuen `ArrayBuffer` zurück, dessen Inhalte eine Kopie der Bytes dieses `ArrayBuffer` sind, beginnend bei `start` (einschließlich) bis `end` (ausschließlich). Wenn `start` oder `end` negativ sind, beziehen sie sich auf einen Index vom Ende des Arrays anstatt vom Anfang.

{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Extraktion beginnt, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Puffers zurück — wenn `-buffer.length <= start < 0`, wird `start + buffer.length` verwendet.
    - Wenn `start < -buffer.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= buffer.length` ist, wird ein leerer Puffer zurückgegeben.
- `end` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Extraktion endet, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Puffers zurück — wenn `-buffer.length <= end < 0`, wird `end + buffer.length` verwendet.
    - Wenn `end < -buffer.length`, wird `0` verwendet.
    - Wenn `end >= buffer.length` oder `end` weggelassen wird, wird `buffer.length` verwendet, wodurch alle Elemente bis zum Ende extrahiert werden.
    - Wenn `end` eine Position impliziert, die vor oder an der Position liegt, die durch `start` impliziert wird, wird ein leerer Puffer zurückgegeben.

### Rückgabewert

Ein neuer {{jsxref("ArrayBuffer")}}, der die extrahierten Elemente enthält. Er ist nicht [resizable](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable), selbst wenn der ursprüngliche veränderbar war.

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
