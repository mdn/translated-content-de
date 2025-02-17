---
title: "RTCOutboundRtpStreamStats: framesPerSecond-Eigenschaft"
short-title: framesPerSecond
slug: Web/API/RTCOutboundRtpStreamStats/framesPerSecond
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`framesPerSecond`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs gibt die Anzahl der codierten Frames an, die in der letzten Sekunde gesendet wurden.

Beachten Sie, dass dieser Wert niedriger sein kann als die Bildrate der Medienquelle, die unter [`RTCVideoSourceStats.framesPerSecond`](/de/docs/Web/API/RTCVideoSourceStats/framesPerSecond) angegeben ist.

> [!NOTE]
> Der Wert existiert nicht für Audio oder vor der ersten Sekunde der Codierung.

## Wert

Eine positive Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
