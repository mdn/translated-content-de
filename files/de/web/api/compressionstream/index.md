---
title: CompressionStream
slug: Web/API/CompressionStream
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`CompressionStream`**-Schnittstelle der [Compression Streams API](/de/docs/Web/API/Compression_Streams_API) komprimiert einen Datenstrom. Sie hat dieselbe Struktur wie ein [`TransformStream`](/de/docs/Web/API/TransformStream) und kann daher mit [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) und ähnlichen Methoden verwendet werden.

## Konstruktor

- [`CompressionStream()`](/de/docs/Web/API/CompressionStream/CompressionStream)
  - : Erstellt einen neuen `CompressionStream`.

## Instanzeigenschaften

- [`CompressionStream.readable`](/de/docs/Web/API/CompressionStream/readable) {{ReadOnlyInline}}
  - : Gibt die von diesem Objekt gesteuerte [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück.
- [`CompressionStream.writable`](/de/docs/Web/API/CompressionStream/writable) {{ReadOnlyInline}}
  - : Gibt die von diesem Objekt gesteuerte [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück.

## Beispiele

In diesem Beispiel wird ein Datenstrom mit gzip komprimiert.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DecompressionStream`](/de/docs/Web/API/DecompressionStream)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
