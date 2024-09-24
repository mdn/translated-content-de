---
title: "DecompressionStream: writable Eigenschaft"
short-title: writable
slug: Web/API/DecompressionStream/writable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`writable`** schreibgeschützte Eigenschaft der {{domxref("DecompressionStream")}}-Schnittstelle gibt einen {{domxref("WritableStream")}} zurück.

## Wert

Ein {{domxref("WritableStream")}}.

## Beispiele

Das folgende Beispiel gibt einen {{domxref("WritableStream")}} von einem `DecompressionStream` zurück.

```js
let stream = new DecompressionStream("gzip");
console.log(stream.writable); // A WritableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
