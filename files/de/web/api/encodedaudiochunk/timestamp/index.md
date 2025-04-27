---
title: "EncodedAudioChunk: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/EncodedAudioChunk/timestamp
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`timestamp`**-Eigenschaft der [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Schnittstelle gibt eine ganze Zahl zurück, die den Zeitstempel des Audios in Mikrosekunden angibt.

## Wert

Eine ganze Zahl.

## Beispiele

Im folgenden Beispiel wird der `timestamp` in der Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedAudioChunk(init);

console.log(chunk.timestamp); // 23000000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
