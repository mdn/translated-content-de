---
title: "CompressionStream: lesbare Eigenschaft"
short-title: readable
slug: Web/API/CompressionStream/readable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`readable`** der [`CompressionStream`](/de/docs/Web/API/CompressionStream)-Schnittstelle gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Im folgenden Beispiel wird ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) aus einem `CompressionStream` zurückgegeben.

```js
let stream = new CompressionStream("gzip");
console.log(stream.readable); //a ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
