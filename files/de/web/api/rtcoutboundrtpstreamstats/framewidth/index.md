---
title: "RTCOutboundRtpStreamStats: frameWidth-Eigenschaft"
short-title: frameWidth
slug: Web/API/RTCOutboundRtpStreamStats/frameWidth
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`frameWidth`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist eine positive ganze Zahl, die die Breite des letzten kodierten Frames in Pixeln angibt.

Beachten Sie, dass die Auflösung des kodierten Frames niedriger sein kann als die der Medienquelle, welche in [`RTCVideoSourceStats.width`](/de/docs/Web/API/RTCVideoSourceStats/width) angegeben wird.

> [!NOTE]
> Der Wert existiert nicht für Audio oder bevor der erste Frame kodiert wird.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
