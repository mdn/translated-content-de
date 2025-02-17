---
title: "RTCOutboundRtpStreamStats: Eigenschaft frameHeight"
short-title: frameHeight
slug: Web/API/RTCOutboundRtpStreamStats/frameHeight
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`frameHeight`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist eine positive Ganzzahl, die die Höhe des zuletzt codierten Frames in Pixeln angibt.

Beachten Sie, dass die Auflösung des codierten Frames niedriger sein kann als die der Medienquelle, die in [`RTCVideoSourceStats.height`](/de/docs/Web/API/RTCVideoSourceStats/height) angegeben ist.

> [!NOTE]
> Die Eigenschaft ist bei Audiostreams undefiniert und vor der Codierung des ersten Frames ebenfalls.

## Wert

Eine positive Ganzzahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
