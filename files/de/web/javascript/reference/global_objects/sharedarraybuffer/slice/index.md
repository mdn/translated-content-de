---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
l10n:
  sourceCommit: a95a719c5d6549d78afcc77088994570259f1291
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("SharedArrayBuffer")}} Instanzen gibt einen neuen `SharedArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `SharedArrayBuffer` von `start` (inklusive) bis `end` (exklusiv) ist. Wenn entweder `start` oder `end` negativ ist, bezieht es sich auf einen Index vom Ende des Arrays, im Gegensatz zum Anfang.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-slice.html")}}

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Extraktion beginnt, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt von Ende des Puffers zurück — wenn `-buffer.length <= start < 0`, wird `start + buffer.length` verwendet.
    - Wenn `start < -buffer.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= buffer.length` ist, wird ein leerer Puffer zurückgegeben.
- `end` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Extraktion endet, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt von Ende des Puffers zurück — wenn `-buffer.length <= end < 0`, wird `end + buffer.length` verwendet.
    - Wenn `end < -buffer.length`, wird `0` verwendet.
    - Wenn `end >= buffer.length` oder `end` weggelassen wird, wird `buffer.length` verwendet, wodurch alle Elemente bis zum Ende extrahiert werden.
    - Wenn `end` eine Position vor oder an der durch `start` implizierten Position angibt, wird ein leerer Puffer zurückgegeben.

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
