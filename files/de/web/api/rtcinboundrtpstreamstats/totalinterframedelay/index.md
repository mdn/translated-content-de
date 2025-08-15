---
title: "RTCInboundRtpStreamStats: totalInterFrameDelay-Eigenschaft"
short-title: totalInterFrameDelay
slug: Web/API/RTCInboundRtpStreamStats/totalInterFrameDelay
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`totalInterFrameDelay`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die insgesamt angesammelte Zeit zwischen aufeinanderfolgend gerenderten Frames in Sekunden an.
Sie wird nach jedem gerenderten Frame aufgezeichnet.

Die Interframe-Verzögerungsvarianz kann aus `totalInterFrameDelay`, [`totalSquaredInterFrameDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSquaredInterFrameDelay) und [`framesRendered`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesRendered) nach der Formel berechnet werden: `(totalSquaredInterFrameDelay - totalInterFrameDelay^2 / framesRendered) / framesRendered`.

> [!NOTE]
> Die Eigenschaft ist für Audiostreams nicht definiert.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
