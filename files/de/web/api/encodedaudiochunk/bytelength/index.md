---
title: "EncodedAudioChunk: byteLength-Eigenschaft"
short-title: byteLength
slug: Web/API/EncodedAudioChunk/byteLength
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`byteLength`** schreibgeschützte Eigenschaft des [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Interfaces gibt die Länge der kodierten Audiodaten in Bytes zurück.

## Wert

Ein Integer.

## Beispiele

Im folgenden Beispiel wird `byteLength` in der Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedAudioChunk(init);

console.log(chunk.byteLength); //352800
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
