---
title: "RTCVideoSourceStats: `framesPerSecond`-Eigenschaft"
short-title: framesPerSecond
slug: Web/API/RTCVideoSourceStats/framesPerSecond
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`framesPerSecond`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Wörterbuchs gibt die Anzahl der Frames an, die in der letzten Sekunde von dieser Videoquelle stammen.

Die Eigenschaft ist im ersten Lebenssekunde des Statistikobjekts nicht definiert.

## Wert

Eine Zahl, die die Anzahl der Frames angibt, die in der letzten Sekunde von dieser Quelle stammen.

## Beispiele

Dieses Beispiel zeigt, wie Sie das Statistikobjekt durchlaufen könnten, das von `RTCRtpSender.getStats()` zurückgegeben wird, um die Videoquellenstatistiken zu erhalten und dann die `framesPerSecond` extrahieren.

```js
// where sender is an RTCRtpSender
const stats = await sender.getStats();
let videoSourceStats = null;

stats.forEach((report) => {
  if (report.type === "media-source" && report.kind==="video") {
    videoSourceStats = report;
    break;
  }
});

// Note, test is conditional in case the stats object
// does not include video source stats
const fps = videoSourceStats?.framesPerSecond;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
