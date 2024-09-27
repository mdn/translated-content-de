---
title: Compression Streams API
slug: Web/API/Compression_Streams_API
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{DefaultAPISidebar("Compression Streams API")}}{{AvailableInWorkers}}

Die **Compression Streams API** bietet eine JavaScript-API zum Komprimieren und Dekomprimieren von Datenströmen unter Verwendung der Formate gzip oder deflate.

Eingebaute Komprimierung bedeutet, dass JavaScript-Anwendungen keine Komprimierungsbibliothek einbinden müssen, wodurch die Downloadgröße der Anwendung kleiner wird.

## Schnittstellen

- [`CompressionStream`](/de/docs/Web/API/CompressionStream)
  - : Komprimiert einen Datenstrom.
- [`DecompressionStream`](/de/docs/Web/API/DecompressionStream)
  - : Dekomprimiert einen Datenstrom.

## Beispiele

In diesem Beispiel wird ein Stream mit gzip-Komprimierung komprimiert.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

Im folgenden Beispiel dekomprimiert eine Funktion ein Blob mit gzip.

```js
async function DecompressBlob(blob) {
  const ds = new DecompressionStream("gzip");
  const decompressedStream = blob.stream().pipeThrough(ds);
  return await new Response(decompressedStream).blob();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
