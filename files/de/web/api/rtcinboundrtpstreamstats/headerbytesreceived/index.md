---
title: "RTCInboundRtpStreamStats: headerBytesReceived Eigenschaft"
short-title: headerBytesReceived
slug: Web/API/RTCInboundRtpStreamStats/headerBytesReceived
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`headerBytesReceived`** Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Dictionaries gibt die Gesamtanzahl der empfangenen RTP-Header- und Padding-Bytes für diese [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc) an, einschließlich der in erneuten Übertragungen gesendeten.

Beachten Sie, dass die Gesamtanzahl der über den Transport als Nutzlast empfangenen Bytes gleich ist: `headerBytesReceived` + [`bytesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived).

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
