---
title: "EncodedVideoChunk: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/EncodedVideoChunk/timestamp
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`timestamp`** des [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Interfaces gibt eine ganze Zahl zurück, die den Zeitstempel des Videos in Mikrosekunden angibt.

## Wert

Eine ganze Zahl.

## Beispiele

Im folgenden Beispiel wird der `timestamp` in die Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedVideoChunk(init);
console.log(chunk.timestamp); //23000000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
