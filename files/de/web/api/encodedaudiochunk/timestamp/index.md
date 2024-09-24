---
title: "EncodedAudioChunk: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/EncodedAudioChunk/timestamp
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`timestamp`** schreibgeschützte Eigenschaft der {{domxref("EncodedAudioChunk")}}-Schnittstelle gibt einen ganzzahligen Wert zurück, der den Zeitstempel des Audios in Mikrosekunden angibt.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Im folgenden Beispiel wird der `timestamp` in der Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedAudioChunk(init);

console.log(chunk.timestamp); //23000000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
