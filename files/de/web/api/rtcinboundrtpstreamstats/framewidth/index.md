---
title: "RTCInboundRtpStreamStats: frameWidth-Eigenschaft"
short-title: frameWidth
slug: Web/API/RTCInboundRtpStreamStats/frameWidth
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`frameWidth`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Breite des letzten decodierten Frames in Pixel an.

Beachten Sie, dass die Auflösung des codierten Frames niedriger sein kann als die der Medienquelle, die in [`RTCVideoSourceStats.width`](/de/docs/Web/API/RTCVideoSourceStats/width) angegeben ist.

> [!NOTE]
> Der Wert ist nicht definiert für Audiostreams oder bevor der erste Frame codiert wird.

## Wert

Eine positive Ganzzahl, in Pixeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
