---
title: "RTCVideoSourceStats: frames-Eigenschaft"
short-title: frames
slug: Web/API/RTCVideoSourceStats/frames
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`frames`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Wörterbuchs gibt die Gesamtzahl der Frames an, die von dieser Videoquelle im Laufe ihrer Lebensdauer stammen.

## Wert

Eine Zahl, die die Gesamtanzahl der von dieser Quelle stammenden Frames angibt.

## Beispiele

Dieses Beispiel zeigt, wie Sie das `stats`-Objekt durchlaufen können, das von `RTCRtpSender.getStats()` zurückgegeben wird, um die Videoquellenstatistiken zu erhalten, und dann die `frames` extrahieren.

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
