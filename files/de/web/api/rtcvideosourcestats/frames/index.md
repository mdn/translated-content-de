---
title: "RTCVideoSourceStats: frames-Eigenschaft"
short-title: frames
slug: Web/API/RTCVideoSourceStats/frames
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`frames`**-Eigenschaft des {{domxref("RTCVideoSourceStats")}}-Wörterbuchs gibt die Gesamtanzahl der Frames an, die während der Lebensdauer dieser Videoquelle erzeugt wurden.

## Wert

Eine Zahl, die die Gesamtanzahl der Frames angibt, die von dieser Quelle stammen.

## Beispiele

Dieses Beispiel zeigt, wie Sie das von `RTCRtpSender.getStats()` zurückgegebene Statistikobjekt durchlaufen können, um die Videodatenquelle-Statistiken zu erhalten und dann die `frames` zu extrahieren.

```js
// wobei sender ein RTCRtpSender ist
const stats = await sender.getStats();
let videoSourceStats = null;

stats.forEach((report) => {
  if (report.type === "media-source" && report.kind==="video") {
    videoSourceStats = report;
    break;
  }
});

const frames = videoSourceStats?.frames;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
