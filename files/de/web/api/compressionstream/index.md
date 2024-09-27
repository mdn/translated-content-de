---
title: CompressionStream
slug: Web/API/CompressionStream
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`CompressionStream`**-Schnittstelle der [Compression Streams API](/de/docs/Web/API/Compression_Streams_API) ist eine API zum Komprimieren eines Datenstroms.

## Konstruktor

- [`CompressionStream()`](/de/docs/Web/API/CompressionStream/CompressionStream)
  - : Erstellt einen neuen `CompressionStream`

## Instanzeigenschaften

- [`CompressionStream.readable`](/de/docs/Web/API/CompressionStream/readable)
  - : Gibt die [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die von diesem Objekt gesteuert wird.
- [`CompressionStream.writable`](/de/docs/Web/API/CompressionStream/writable)
  - : Gibt die [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die von diesem Objekt gesteuert wird.

## Beispiele

In diesem Beispiel wird ein Stream mit Gzip-Komprimierung komprimiert.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
