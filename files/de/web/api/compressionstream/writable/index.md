---
title: "CompressionStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/CompressionStream/writable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`writable`** des [`CompressionStream`](/de/docs/Web/API/CompressionStream)-Interfaces gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Das folgende Beispiel gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) aus einem `CompressionStream` zurück.

```js
let stream = new CompressionStream("gzip");
console.log(stream.writable); // A WritableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
