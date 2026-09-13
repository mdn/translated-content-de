---
title: "RTCVideoSourceStats: height-Eigenschaft"
short-title: height
slug: Web/API/RTCVideoSourceStats/height
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("WebRTC")}}

Die **`height`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Wörterbuchs zeigt die Höhe, in Pixel, des letzten Frames an, der von dieser Quelle stammt.

Diese Eigenschaft ist im Statistikobjekt erst nach der Erzeugung des ersten Frames definiert.

## Wert

Eine positive Zahl, die die Höhe in Pixel angibt.

## Beispiele

Dieses Beispiel zeigt, wie Sie möglicherweise das Statistikobjekt iterieren, das von `RTCRtpSender.getStats()` zurückgegeben wird, um die Videoquellen-Statistiken zu erhalten und dann die `height` extrahieren.

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
const height = videoSourceStats?.height;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
