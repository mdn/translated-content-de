---
title: "CompressionStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/CompressionStream/readable
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`readable`**-Eigenschaft des [`CompressionStream`](/de/docs/Web/API/CompressionStream)-Interfaces gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Das folgende Beispiel gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von einem `CompressionStream` zurück.

```js
let stream = new CompressionStream("gzip");
console.log(stream.readable); // A ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
