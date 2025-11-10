---
title: "TextEncoderStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/TextEncoderStream/writable
l10n:
  sourceCommit: 0f42b8ccf6bef96f27e678163954b3a363b9dcf6
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`writable`** des [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)-Interfaces gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Das folgende Beispiel zeigt, wie ein `WritableStream` aus einem `TextEncoderStream`-Objekt zurückgegeben wird.

```js
const stream = new TextEncoderStream();
console.log(stream.writable); // A WritableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
