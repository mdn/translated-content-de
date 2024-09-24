---
title: "RTCVideoSourceStats: framesPerSecond Eigenschaft"
short-title: framesPerSecond
slug: Web/API/RTCVideoSourceStats/framesPerSecond
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`framesPerSecond`**-Eigenschaft des {{domxref("RTCVideoSourceStats")}}-Wörterbuchs gibt die Anzahl der Bilder an, die in der letzten Sekunde von dieser Videoquelle stammen.

Die Eigenschaft ist im ersten Lebenssekunde des Statistik-Objekts nicht definiert.

## Wert

Eine Zahl, die die von dieser Quelle in der letzten Sekunde stammenden Bilder angibt.

## Beispiele

Dieses Beispiel zeigt, wie Sie das Statistik-Objekt, das von `RTCRtpSender.getStats()` zurückgegeben wird, durchlaufen könnten, um die Videorquellenstatistiken zu erhalten und dann die `framesPerSecond`-Eigenschaft zu extrahieren.

```js
// wo sender ein RTCRtpSender ist
const stats = await sender.getStats();
let videoSourceStats = null;

stats.forEach((report) => {
  if (report.type === "media-source" && report.kind==="video") {
    videoSourceStats = report;
    break;
  }
});

// Beachten Sie, dass der Test bedingt ist, falls das Statistik-Objekt
// keine Videorquellenstatistiken enthält
const fps = videoSourceStats?.framesPerSecond;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
