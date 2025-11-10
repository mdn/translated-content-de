---
title: "RTCInboundRtpStreamStats: framesReceived-Eigenschaft"
short-title: framesReceived
slug: Web/API/RTCInboundRtpStreamStats/framesReceived
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`framesReceived`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtanzahl der vollständigen Frames an, die während der gesamten Lebensdauer dieses RTP-Streams empfangen wurden.

Beachten Sie, dass dies niedriger sein kann als die Gesamtzahl der Medienquellen-Frames, die in [`RTCVideoSourceStats.frames`](/de/docs/Web/API/RTCVideoSourceStats/frames) angegeben ist.

> [!NOTE]
> Der Wert ist für Audio-Streams nicht definiert.

## Wert

Eine positive Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
