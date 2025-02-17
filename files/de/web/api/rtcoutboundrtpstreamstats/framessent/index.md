---
title: "RTCOutboundRtpStreamStats: framesSent-Eigenschaft"
short-title: framesSent
slug: Web/API/RTCOutboundRtpStreamStats/framesSent
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`framesSent`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs gibt die Gesamtanzahl der codierten Frames an, die über die Lebensdauer dieses RTP-Streams gesendet wurden.

Beachten Sie, dass dies niedriger sein kann als die Gesamtanzahl der Frames der Medienquelle, die in [`RTCVideoSourceStats.frames`](/de/docs/Web/API/RTCVideoSourceStats/frames) angegeben ist.

> [!NOTE]
> Der Wert existiert nicht für Audio.

## Wert

Eine positive Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
