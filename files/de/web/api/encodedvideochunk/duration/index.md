---
title: "EncodedVideoChunk: duration-Eigenschaft"
short-title: duration
slug: Web/API/EncodedVideoChunk/duration
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`duration`**-Eigenschaft des schreibgeschützten [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Interfaces gibt eine Ganzzahl zurück, die die Dauer des Videos in Mikrosekunden angibt.

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
chunk = EncodedVideoChunk(init);

console.log(chunk.duration); //2000000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
