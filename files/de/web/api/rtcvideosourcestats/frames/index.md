---
title: "RTCVideoSourceStats: frames-Eigenschaft"
short-title: frames
slug: Web/API/RTCVideoSourceStats/frames
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("WebRTC")}}

Die **`frames`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) Dictionaries gibt die Gesamtzahl der Frames an, die von dieser Videoquelle über ihre gesamte Lebensdauer stammen.

## Wert

Eine Zahl, die die Gesamtzahl der Frames angibt, die von dieser Quelle stammen.

## Beispiele

Dieses Beispiel zeigt, wie Sie das vom `RTCRtpSender.getStats()` zurückgegebene Statistikobjekt durchlaufen, um die Videoquellen-Statistiken zu erhalten, und dann die `frames` extrahieren.

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

const frames = videoSourceStats?.frames;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
