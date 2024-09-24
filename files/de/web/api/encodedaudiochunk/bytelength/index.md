---
title: "EncodedAudioChunk: byteLength-Eigenschaft"
short-title: byteLength
slug: Web/API/EncodedAudioChunk/byteLength
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`byteLength`**-Eigenschaft der {{domxref("EncodedAudioChunk")}}-Schnittstelle, die nur lesbar ist, gibt die Länge der kodierten Audiodaten in Bytes zurück.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Im folgenden Beispiel wird die `byteLength` in die Konsole ausgegeben.

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

## Kompatibilität der Browser

{{Compat}}
