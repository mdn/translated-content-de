---
title: CompressionStream
slug: Web/API/CompressionStream
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Das **`CompressionStream`**-Interface der {{domxref('Compression Streams API','','',' ')}} ist eine API zum Komprimieren eines Datenstroms.

## Konstruktor

- {{domxref("CompressionStream.CompressionStream", "CompressionStream()")}}
  - : Erstellt einen neuen `CompressionStream`

## Instanzeigenschaften

- {{domxref("CompressionStream.readable")}}
  - : Gibt die {{domxref("ReadableStream")}}-Instanz zurück, die von diesem Objekt gesteuert wird.
- {{domxref("CompressionStream.writable")}}
  - : Gibt die {{domxref("WritableStream")}}-Instanz zurück, die von diesem Objekt gesteuert wird.

## Beispiele

In diesem Beispiel wird ein Stream unter Verwendung der gzip-Kompression komprimiert.

```js
const compressedReadableStream = inputReadableStream.pipeThrough(
  new CompressionStream("gzip"),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
