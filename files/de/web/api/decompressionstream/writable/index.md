---
title: "DecompressionStream: writable-Eigenschaft"
short-title: writable
slug: Web/API/DecompressionStream/writable
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Compression Streams API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`writable`**-Eigenschaft der [`DecompressionStream`](/de/docs/Web/API/DecompressionStream)-Schnittstelle gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Das folgende Beispiel gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) von einem `DecompressionStream` zurück.

```js
let stream = new DecompressionStream("gzip");
console.log(stream.writable); // A WritableStream
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
