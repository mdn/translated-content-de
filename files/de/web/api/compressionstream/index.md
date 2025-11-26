---
title: CompressionStream
slug: Web/API/CompressionStream
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Das **`CompressionStream`**-Interface der [Compression Streams API](/de/docs/Web/API/Compression_Streams_API) komprimiert einen Datenstrom. Es implementiert dasselbe Format wie ein [`TransformStream`](/de/docs/Web/API/TransformStream), sodass es in [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) und ähnlichen Methoden verwendet werden kann.

## Konstruktor

- [`CompressionStream()`](/de/docs/Web/API/CompressionStream/CompressionStream)
  - : Erstellt einen neuen `CompressionStream`.

## Instanz-Eigenschaften

- [`CompressionStream.readable`](/de/docs/Web/API/CompressionStream/readable)
  - : Gibt die vom Objekt kontrollierte [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück.
- [`CompressionStream.writable`](/de/docs/Web/API/CompressionStream/writable)
  - : Gibt die vom Objekt kontrollierte [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück.

## Beispiele

In diesem Beispiel wird ein Stream unter Verwendung von Gzip-Komprimierung komprimiert.

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
