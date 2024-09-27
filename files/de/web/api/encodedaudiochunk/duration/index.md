---
title: "EncodedAudioChunk: duration-Eigenschaft"
short-title: duration
slug: Web/API/EncodedAudioChunk/duration
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`duration`** schreibgeschützte Eigenschaft des [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Interfaces gibt eine Ganzzahl zurück, die die Dauer des Audiosignals in Mikrosekunden angibt.

## Wert

Eine Ganzzahl.

## Beispiele

Im folgenden Beispiel wird die `duration` in der Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedAudioChunk(init);

console.log(chunk.duration); //2000000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
