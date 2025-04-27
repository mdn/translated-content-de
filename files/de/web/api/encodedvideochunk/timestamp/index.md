---
title: "EncodedVideoChunk: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/EncodedVideoChunk/timestamp
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`timestamp`**-Eigenschaft der [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Schnittstelle gibt eine ganze Zahl zurück, die den Zeitstempel des Videos in Mikrosekunden angibt.

## Wert

Eine ganze Zahl.

## Beispiele

Im folgenden Beispiel wird der `timestamp` in der Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedVideoChunk(init);
console.log(chunk.timestamp); // 23000000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
