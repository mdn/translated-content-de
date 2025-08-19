---
title: "RTCInboundRtpStreamStats: totalInterFrameDelay-Eigenschaft"
short-title: totalInterFrameDelay
slug: Web/API/RTCInboundRtpStreamStats/totalInterFrameDelay
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

{{APIRef("WebRTC")}}

Die **`totalInterFrameDelay`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die gesamte kumulierte Zeit zwischen aufeinander folgend gerenderten Frames in Sekunden an.
Sie wird nach dem Rendern jedes Frames erfasst.

Die Varianz der Frame-Zwischenverzögerung kann aus `totalInterFrameDelay`, [`totalSquaredInterFrameDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSquaredInterFrameDelay) und [`framesRendered`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesRendered) gemäß der Formel berechnet werden: `(totalSquaredInterFrameDelay - totalInterFrameDelay^2/ framesRendered)/framesRendered`.

> [!NOTE]
> Die Eigenschaft ist für Audioströme nicht definiert.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
