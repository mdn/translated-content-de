---
title: Compression Streams API
slug: Web/API/Compression_Streams_API
l10n:
  sourceCommit: 7d17bd76546fce1b3889f151876481507bce2a31
---

{{DefaultAPISidebar("Compression Streams API")}}{{AvailableInWorkers}}

Die **Compression Streams API** bietet eine JavaScript-API zur Komprimierung und Dekomprimierung von Datenströmen unter Verwendung der gzip- oder deflate-Formate.

Durch die eingebaute Kompression müssen JavaScript-Anwendungen keine Kompressionsbibliothek enthalten, was die Downloadgröße der Anwendung verringert.

Die Fetch API's [`Response`](/de/docs/Web/API/Response) kann verwendet werden, um Streams in folgende Formate zu konvertieren:

- {{jsxref("ArrayBuffer")}}
- [`Blob`](/de/docs/Web/API/Blob)
- {{jsxref("Uint8Array")}}
- {{jsxref("String")}}
- JSON

## Schnittstellen

- [`CompressionStream`](/de/docs/Web/API/CompressionStream)
  - : Komprimiert einen Datenstrom.
- [`DecompressionStream`](/de/docs/Web/API/DecompressionStream)
  - : Dekomprimiert einen Datenstrom.

## Beispiele

In diesem Beispiel wird ein Stream mithilfe der gzip-Komprimierung komprimiert.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

Im folgenden Beispiel dekomprimiert eine Funktion einen Blob mit gzip.

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
