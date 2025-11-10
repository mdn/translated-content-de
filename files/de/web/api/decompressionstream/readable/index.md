---
title: "DecompressionStream: `readable`-Eigenschaft"
short-title: readable
slug: Web/API/DecompressionStream/readable
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`readable`**-Eigenschaft der [`DecompressionStream`](/de/docs/Web/API/DecompressionStream)-Schnittstelle gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Das folgende Beispiel gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) aus einem `DecompressionStream` zurück.

```js
const stream = new DecompressionStream("gzip");
console.log(stream.readable); // A ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
