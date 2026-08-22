---
title: "RTCVideoSourceStats: width-Eigenschaft"
short-title: width
slug: Web/API/RTCVideoSourceStats/width
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("WebRTC")}}

Die **`width`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Wörterbuchs gibt die Breite in Pixeln des letzten Frames an, das von dieser Quelle stammt.

Diese Eigenschaft ist auf dem Statistikobjekt nicht definiert, bis das erste Frame produziert wurde.

## Wert

Eine positive Zahl, die die Breite in Pixeln angibt.

## Beispiele

Dieses Beispiel zeigt, wie Sie möglicherweise das Statistikobjekt, das von `RTCRtpSender.getStats()` zurückgegeben wird, durchlaufen, um die Videoquellen-Statistiken zu erhalten und dann die `width`-Eigenschaft extrahieren.

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
const height = videoSourceStats?.width;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
