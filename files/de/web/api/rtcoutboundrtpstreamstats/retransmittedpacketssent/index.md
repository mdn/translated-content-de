---
title: "RTCOutboundRtpStreamStats: retransmittedPacketsSent-Eigenschaft"
short-title: retransmittedPacketsSent
slug: Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`retransmittedPacketsSent`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs stellt die Gesamtanzahl der für die Quelle, die mit diesem Stream verbunden ist, erneut übertragenen Pakete dar.

RTX (Retransmission) ist einer von mehreren Mechanismen, die WebRTC zur erneuten Übertragung verlorener Nutzlast-Bytes verwendet, und bezieht sich allgemein auf die Unterstützung spezieller Pakete, die in {{rfc("4588")}} definiert sind.  
RTX muss zwischen Sender und Empfänger während des initialen Handshakes ausgehandelt werden.  
Wenn RTX nicht ausgehandelt wurde, werden die erneut übertragenen Pakete über die gleiche SSRC gesendet; andernfalls werden die Bytes über eine separate SSRC gesendet, aber dennoch in dieser Eigenschaft berücksichtigt.

Die erneut übertragenen Pakete sind in der von [`packetsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/packetsSent) gemeldeten Anzahl enthalten.

## Wert

Eine positive ganze Zahl, die die Anzahl der erneut übertragenen Pakete für die Quelle angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
