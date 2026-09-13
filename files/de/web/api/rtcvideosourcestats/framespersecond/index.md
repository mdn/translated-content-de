---
title: "RTCVideoSourceStats: framesPerSecond-Eigenschaft"
short-title: framesPerSecond
slug: Web/API/RTCVideoSourceStats/framesPerSecond
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("WebRTC")}}

Die **`framesPerSecond`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Wörterbuchs gibt die Anzahl der Frames an, die in der letzten Sekunde von dieser Videoquelle stammen.

Die Eigenschaft ist im Statistikobjekt für die erste Sekunde seiner Lebensdauer nicht definiert.

## Wert

Eine Zahl, die die Frames angibt, die in der letzten Sekunde von dieser Quelle stammen.

## Beispiele

Dieses Beispiel zeigt, wie Sie das Statistikobjekt, das von `RTCRtpSender.getStats()` zurückgegeben wird, durchlaufen könnten, um die Videquellenstatistiken zu erhalten, und dann die `framesPerSecond` extrahieren.

```js
// where sender is an RTCRtpSender
const stats = await sender.getStats();
let videoSourceStats = null;

for (const report of stats.values()) {
  if (report.type === "media-source" && report.kind === "video") {
    videoSourceStats = report;
    break;
  }
}

// Note, test is conditional in case the stats object
// does not include video source stats
const fps = videoSourceStats?.framesPerSecond;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
