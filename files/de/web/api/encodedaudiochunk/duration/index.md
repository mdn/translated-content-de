---
title: "EncodedAudioChunk: duration-Eigenschaft"
short-title: duration
slug: Web/API/EncodedAudioChunk/duration
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`duration`**-Eigenschaft des Schnittstellenobjekts [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) gibt eine ganze Zahl zurück, die die Dauer des Audios in Mikrosekunden angibt. Diese Eigenschaft ist schreibgeschützt.

## Wert

Eine ganze Zahl.

## Beispiele

Im folgenden Beispiel wird die `duration` in der Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedAudioChunk(init);

console.log(chunk.duration); // 2000000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
