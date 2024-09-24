---
title: "TextDecoderStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/TextDecoderStream/writable
l10n:
  sourceCommit: cb904d0a6e21bd40f31b31d71c0c3bd85622c01c
---

{{APIRef("Encoding API")}}

Die schreibgeschützte **`writable`**-Eigenschaft der {{domxref("TextDecoderStream")}}-Schnittstelle gibt einen {{domxref("WritableStream")}} zurück.

## Wert

Ein {{domxref("WritableStream")}}.

## Beispiele

Rückgabe eines {{domxref("WritableStream")}} von einem `TextDecoderStream`.

```js
stream = new TextDecoderStream();
console.log(stream.writable); // A WritableStream
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
