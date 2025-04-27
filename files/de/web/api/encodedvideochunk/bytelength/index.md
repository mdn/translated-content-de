---
title: "EncodedVideoChunk: byteLength Eigenschaft"
short-title: byteLength
slug: Web/API/EncodedVideoChunk/byteLength
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`byteLength`**-Eigenschaft der [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Schnittstelle gibt die Länge der codierten Videodaten in Bytes zurück.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Im folgenden Beispiel wird `byteLength` in der Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedVideoChunk(init);

console.log(chunk.byteLength); // 352800
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
