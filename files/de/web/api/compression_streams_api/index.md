---
title: Compression Streams API
slug: Web/API/Compression_Streams_API
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{DefaultAPISidebar("Compression Streams API")}}{{AvailableInWorkers}}

Die **Compression Streams API** bietet eine JavaScript-API zum Komprimieren und Dekomprimieren von Datenströmen unter Verwendung der gzip- oder deflate-Formate.

Da die Komprimierung eingebaut ist, müssen JavaScript-Anwendungen keine Komprimierungsbibliothek einbinden, was die Download-Größe der Anwendung verringert.

Die [`Response`](/de/docs/Web/API/Response) der Fetch API kann verwendet werden, um Streams in folgende Formate zu konvertieren:

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

In diesem Beispiel wird ein Stream mittels gzip-Kompression komprimiert.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

Im folgenden Beispiel dekomprimiert eine Funktion einen Blob mittels gzip.

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
