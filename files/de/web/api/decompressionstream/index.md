---
title: Dekomprimierungsstream
slug: Web/API/DecompressionStream
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`DecompressionStream`**-Schnittstelle der {{domxref('Compression Streams API','','',' ')}} ist eine API zur Dekomprimierung eines Datenstroms.

## Konstruktor

- {{domxref("DecompressionStream.DecompressionStream", "DecompressionStream()")}}
  - : Erstellt einen neuen `DecompressionStream`

## Instanzeigenschaften

- {{domxref("DecompressionStream.readable")}}
  - : Gibt die {{domxref("ReadableStream")}}-Instanz zurück, die von diesem Objekt gesteuert wird.
- {{domxref("DecompressionStream.writable")}}
  - : Gibt die {{domxref("WritableStream")}}-Instanz zurück, die von diesem Objekt gesteuert wird.

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
