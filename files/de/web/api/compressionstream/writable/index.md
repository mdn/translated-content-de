---
title: "CompressionStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/CompressionStream/writable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`writable`** schreibgeschützte Eigenschaft der {{domxref("CompressionStream")}} Schnittstelle gibt einen {{domxref("WritableStream")}} zurück.

## Wert

Ein {{domxref("WritableStream")}}.

## Beispiele

Das folgende Beispiel gibt einen {{domxref("WritableStream")}} aus einem `CompressionStream` zurück.

```js
let stream = new CompressionStream("gzip");
console.log(stream.writable); // Ein WritableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
