---
title: DecompressionStream
slug: Web/API/DecompressionStream
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`DecompressionStream`**-Schnittstelle der [Compression Streams API](/de/docs/Web/API/Compression_Streams_API) ist eine API zum Dekomprimieren eines Datenstroms.

## Konstruktor

- [`DecompressionStream()`](/de/docs/Web/API/DecompressionStream/DecompressionStream)
  - : Erstellt einen neuen `DecompressionStream`

## Instanz-Eigenschaften

- [`DecompressionStream.readable`](/de/docs/Web/API/DecompressionStream/readable)
  - : Gibt die [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die von diesem Objekt kontrolliert wird.
- [`DecompressionStream.writable`](/de/docs/Web/API/DecompressionStream/writable)
  - : Gibt die [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die von diesem Objekt kontrolliert wird.

## Beispiele

In diesem Beispiel wird ein Blob mit gzip-Kompression dekomprimiert.

```js
const ds = new DecompressionStream("gzip");
const decompressedStream = blob.stream().pipeThrough(ds);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
