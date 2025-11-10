---
title: "RTCInboundRtpStreamStats: framesPerSecond-Eigenschaft"
short-title: framesPerSecond
slug: Web/API/RTCInboundRtpStreamStats/framesPerSecond
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`framesPerSecond`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Anzahl der im letzten Sekunde decodierten Frames an.

Beachten Sie, dass dies niedriger sein kann als die Bildrate der Medienquelle, die in [`RTCVideoSourceStats.framesPerSecond`](/de/docs/Web/API/RTCVideoSourceStats/framesPerSecond) bereitgestellt wird.

> [!NOTE]
> Der Wert ist für Audiostreams undefiniert.

## Wert

Eine positive Ganzzahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
