---
title: "RTCOutboundRtpStreamStats: headerBytesSent-Eigenschaft"
short-title: headerBytesSent
slug: Web/API/RTCOutboundRtpStreamStats/headerBytesSent
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`headerBytesSent`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs gibt die gesamte Anzahl der gesendeten RTP-Header- und Padding-Bytes für diese [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCOutboundRtpStreamStats/ssrc) an.

Beachten Sie, dass die Gesamtanzahl der als Nutzlast über den Transport gesendeten Bytes gleich ist: `headerBytesSent` + [`bytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/bytesSent).

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
