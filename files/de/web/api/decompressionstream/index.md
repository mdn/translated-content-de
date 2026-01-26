---
title: DecompressionStream
slug: Web/API/DecompressionStream
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Das **`DecompressionStream`** Interface der [Compression Streams API](/de/docs/Web/API/Compression_Streams_API) dekomprimiert einen Datenstrom. Es implementiert die gleiche Struktur wie ein [`TransformStream`](/de/docs/Web/API/TransformStream), was es ermöglicht, es in Methoden wie [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) zu verwenden.

## Konstruktor

- [`DecompressionStream()`](/de/docs/Web/API/DecompressionStream/DecompressionStream)
  - : Erstellt einen neuen `DecompressionStream`

## Instanz-Eigenschaften

- [`DecompressionStream.readable`](/de/docs/Web/API/DecompressionStream/readable)
  - : Gibt die [`ReadableStream`](/de/docs/Web/API/ReadableStream) Instanz zurück, die von diesem Objekt kontrolliert wird.
- [`DecompressionStream.writable`](/de/docs/Web/API/DecompressionStream/writable)
  - : Gibt die [`WritableStream`](/de/docs/Web/API/WritableStream) Instanz zurück, die von diesem Objekt kontrolliert wird.

## Beispiele

In diesem Beispiel wird ein Blob unter Verwendung von gzip-Kompression dekomprimiert.

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CompressionStream`](/de/docs/Web/API/CompressionStream)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
