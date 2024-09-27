---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
l10n:
  sourceCommit: a95a719c5d6549d78afcc77088994570259f1291
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("ArrayBuffer")}}-Instanzen gibt einen neuen `ArrayBuffer` zurück, dessen Inhalt eine Kopie der Bytes dieses `ArrayBuffer` von `start` (einschließlich) bis `end` (ausschließlich) ist. Wenn `start` oder `end` negativ ist, bezieht sich dies auf einen Index vom Ende des Arrays anstelle vom Anfang.

{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Index für den Start der Extraktion, basierend auf null, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Puffers zurück – wenn `-buffer.length <= start < 0`, wird `start + buffer.length` verwendet.
    - Wenn `start < -buffer.length` oder `start` ausgelassen wird, wird `0` verwendet.
    - Wenn `start >= buffer.length`, wird ein leerer Puffer zurückgegeben.
- `end` {{optional_inline}}
  - : Index zum Beenden der Extraktion, basierend auf null, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Puffers zurück – wenn `-buffer.length <= end < 0`, wird `end + buffer.length` verwendet.
    - Wenn `end < -buffer.length`, wird `0` verwendet.
    - Wenn `end >= buffer.length` oder `end` ausgelassen wird, wird `buffer.length` verwendet, wodurch alle Elemente bis zum Ende extrahiert werden.
    - Wenn `end` eine Position vor oder an der von `start` implizierten Position angibt, wird ein leerer Puffer zurückgegeben.

### Rückgabewert

Ein neuer {{jsxref("ArrayBuffer")}}, der die extrahierten Elemente enthält.

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
