---
title: "EncodedAudioChunk: byteLength-Eigenschaft"
short-title: byteLength
slug: Web/API/EncodedAudioChunk/byteLength
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`byteLength`** des [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Interfaces gibt die Länge in Bytes der kodierten Audiodaten zurück.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Im folgenden Beispiel wird `byteLength` in der Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedAudioChunk(init);

console.log(chunk.byteLength); // 352800
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
