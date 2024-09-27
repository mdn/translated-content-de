---
title: "RTCVideoSourceStats: height-Eigenschaft"
short-title: height
slug: Web/API/RTCVideoSourceStats/height
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`height`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Wörterbuchs gibt die Höhe in Pixeln des letzten Rahmens an, der von dieser Quelle stammt.

Diese Eigenschaft wird erst im Statistikobjekt definiert, nachdem der erste Frame erzeugt wurde.

## Wert

Eine positive Zahl, die die Höhe in Pixeln angibt.

## Beispiele

Dieses Beispiel zeigt, wie Sie das Statistikobjekt durchlaufen könnten, das von `RTCRtpSender.getStats()` zurückgegeben wird, um die Videoquellenstatistiken zu erhalten und dann die `height` zu extrahieren.

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
const height = videoSourceStats?.height;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
