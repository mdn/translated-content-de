---
title: "EncodedVideoChunk: duration-Eigenschaft"
short-title: duration
slug: Web/API/EncodedVideoChunk/duration
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`duration`** schreibgeschützte Eigenschaft des [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Interfaces gibt eine Ganzzahl zurück, die die Dauer des Videos in Mikrosekunden angibt.

## Wert

Eine Ganzzahl.

## Beispiele

Im folgenden Beispiel wird die `duration` in der Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedVideoChunk(init);

console.log(chunk.duration); // 2000000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
