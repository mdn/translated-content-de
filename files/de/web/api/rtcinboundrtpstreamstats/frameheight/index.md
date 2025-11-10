---
title: "RTCInboundRtpStreamStats: frameHeight-Eigenschaft"
short-title: frameHeight
slug: Web/API/RTCInboundRtpStreamStats/frameHeight
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`frameHeight`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Höhe des letzten dekodierten Frames in Pixeln an.

Beachten Sie, dass die Auflösung des codierten Frames niedriger sein kann als die der Medienquelle, die in [`RTCVideoSourceStats.height`](/de/docs/Web/API/RTCVideoSourceStats/height) angegeben ist.

> [!NOTE]
> Die Eigenschaft ist für Audiostreams undefiniert und bevor der erste Frame dekodiert wird.

## Wert

Eine positive ganze Zahl, in Pixeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
