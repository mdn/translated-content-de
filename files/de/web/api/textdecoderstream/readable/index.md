---
title: "TextDecoderStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/TextDecoderStream/readable
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`readable`** schreibgeschützte Eigenschaft des [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)-Interfaces gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Dieses Beispiel zeigt, wie man einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von einem `TextDecoderStream` zurückgibt.

```js
const stream = new TextDecoderStream();
console.log(stream.readable); // A ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
