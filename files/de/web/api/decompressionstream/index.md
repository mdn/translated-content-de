---
title: DecompressionStream
slug: Web/API/DecompressionStream
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`DecompressionStream`**-Schnittstelle der [Compression Streams API](/de/docs/Web/API/Compression_Streams_API) dekomprimiert einen Datenstrom. Sie hat dieselbe Struktur wie ein [`TransformStream`](/de/docs/Web/API/TransformStream) und kann daher mit [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) und ähnlichen Methoden verwendet werden.

## Konstruktor

- [`DecompressionStream()`](/de/docs/Web/API/DecompressionStream/DecompressionStream)
  - : Erstellt einen neuen `DecompressionStream`.

## Instanzeigenschaften

- [`DecompressionStream.readable`](/de/docs/Web/API/DecompressionStream/readable) {{ReadOnlyInline}}
  - : Gibt die von diesem Objekt gesteuerte [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück.
- [`DecompressionStream.writable`](/de/docs/Web/API/DecompressionStream/writable) {{ReadOnlyInline}}
  - : Gibt die von diesem Objekt gesteuerte [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück.

## Beispiele

In diesem Beispiel wird ein Blob dekomprimiert, der mit gzip komprimiert wurde.

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
