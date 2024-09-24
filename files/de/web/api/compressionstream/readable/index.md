---
title: "CompressionStream: readable-Eigenschaft"
short-title: readable
slug: Web/API/CompressionStream/readable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`readable`** schreibgeschützte Eigenschaft der {{domxref("CompressionStream")}}-Schnittstelle gibt einen {{domxref("ReadableStream")}} zurück.

## Wert

Ein {{domxref("ReadableStream")}}.

## Beispiele

Das folgende Beispiel gibt einen {{domxref("ReadableStream")}} von einem `CompressionStream` zurück.

```js
let stream = new CompressionStream("gzip");
console.log(stream.readable); //a ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
