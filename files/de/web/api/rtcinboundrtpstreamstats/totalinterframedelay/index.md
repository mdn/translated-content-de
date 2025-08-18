---
title: "RTCInboundRtpStreamStats: totalInterFrameDelay Eigenschaft"
short-title: totalInterFrameDelay
slug: Web/API/RTCInboundRtpStreamStats/totalInterFrameDelay
l10n:
  sourceCommit: 7b8768d410a281446b0b95627c531d852e624353
---

{{APIRef("WebRTC")}}

Die **`totalInterFrameDelay`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die insgesamt angesammelte Zeit zwischen aufeinanderfolgenden gerenderten Frames in Sekunden an. Diese wird nach jedem gerenderten Frame aufgezeichnet.

Die Varianz der Interframe-Verzögerung kann aus `totalInterFrameDelay`, [`totalSquaredInterFrameDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSquaredInterFrameDelay) und [`framesRendered`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesRendered) nach der Formel berechnet werden: `(totalSquaredInterFrameDelay - totalInterFrameDelay^2/ framesRendered)/framesRendered`.

> [!NOTE]
> Die Eigenschaft ist für Audiostreams nicht definiert.

## Wert

Eine positive Zahl in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
