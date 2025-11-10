---
title: "RTCInboundRtpStreamStats: Eigenschaft totalSquaredInterFrameDelay"
short-title: totalSquaredInterFrameDelay
slug: Web/API/RTCInboundRtpStreamStats/totalSquaredInterFrameDelay
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`totalSquaredInterFrameDelay`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Summe der Quadrate jeder Frame-Zwischenverzögerung zwischen aufeinanderfolgend dargestellten Frames an.
Sie wird nach der Darstellung jedes Frames aufgezeichnet.

Die Varianz der Frame-Zwischenverzögerung kann aus [`totalInterFrameDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalInterFrameDelay), `totalSquaredInterFrameDelay` und [`framesRendered`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesRendered) nach der Formel berechnet werden: `(totalSquaredInterFrameDelay - totalInterFrameDelay^2/ framesRendered)/framesRendered`.

> [!NOTE]
> Die Eigenschaft ist für Audio-Streams nicht definiert.

## Wert

Eine positive Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
