---
title: "RTCVideoSourceStats: width-Eigenschaft"
short-title: width
slug: Web/API/RTCVideoSourceStats/width
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`width`**-Eigenschaft des {{domxref("RTCVideoSourceStats")}}-Wörterbuchs gibt die Breite in Pixeln des letzten von dieser Quelle stammenden Frames an.

Diese Eigenschaft wird erst nach der Produktion des ersten Frames im Statistikobjekt definiert.

## Wert

Eine positive Zahl, die die Breite in Pixeln angibt.

## Beispiele

Dieses Beispiel zeigt, wie Sie das Statistikobjekt, das von `RTCRtpSender.getStats()` zurückgegeben wird, durchlaufen können, um die Videoquelle-Statistiken zu erhalten und dann die `width`-Eigenschaft zu extrahieren.

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
const height = videoSourceStats?.width;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
