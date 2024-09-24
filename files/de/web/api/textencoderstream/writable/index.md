---
title: "TextEncoderStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/TextEncoderStream/writable
l10n:
  sourceCommit: cb904d0a6e21bd40f31b31d71c0c3bd85622c01c
---

{{APIRef("Encoding API")}}

Die schreibgeschützte **`writable`**-Eigenschaft der {{domxref("TextEncoderStream")}}-Schnittstelle gibt einen {{domxref("WritableStream")}} zurück.

## Wert

Ein {{domxref("WritableStream")}}.

## Beispiele

Das folgende Beispiel zeigt, wie ein `WritableStream` aus einem `TextEncoderStream`-Objekt zurückgegeben wird.

```js
stream = new TextEncoderStream();
console.log(stream.writable); // A WritableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
