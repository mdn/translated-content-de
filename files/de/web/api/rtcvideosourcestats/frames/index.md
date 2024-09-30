---
title: "RTCVideoSourceStats: frames-Eigenschaft"
short-title: frames
slug: Web/API/RTCVideoSourceStats/frames
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`frames`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Wörterbuchs gibt die Gesamtzahl der Frames an, die von dieser Videoquelle während ihrer Lebensdauer stammen.

## Wert

Eine Zahl, die die Gesamtanzahl der von dieser Quelle stammenden Frames angibt.

## Beispiele

Dieses Beispiel zeigt, wie Sie das von `RTCRtpSender.getStats()` zurückgegebene Stats-Objekt durchlaufen könnten, um die Videoquellen-Statistiken zu erhalten und anschließend die `frames` zu extrahieren.

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

const frames = videoSourceStats?.frames;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
