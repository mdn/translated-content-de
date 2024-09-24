---
title: "DecompressionStream: Leseeigenschaft"
short-title: lesbar
slug: Web/API/DecompressionStream/readable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die **`readable`** schreibgeschützte Eigenschaft des {{domxref("DecompressionStream")}}-Interfaces gibt einen {{domxref("ReadableStream")}} zurück.

## Wert

Ein {{domxref("ReadableStream")}}.

## Beispiele

Das folgende Beispiel gibt einen {{domxref("ReadableStream")}} von einem `DecompressionStream` zurück.

```js
let stream = new DecompressionStream("gzip");
console.log(stream.readable); //a ReadableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
