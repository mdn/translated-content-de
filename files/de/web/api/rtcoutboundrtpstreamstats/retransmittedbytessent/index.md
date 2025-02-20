---
title: "RTCOutboundRtpStreamStats: retransmittedBytesSent-Eigenschaft"
short-title: retransmittedBytesSent
slug: Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`retransmittedBytesSent`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs repräsentiert die Gesamtanzahl der erneut gesendeten Nutzlast-Bytes für die Quelle, die mit diesem Stream verbunden ist.

RTX (Retransmission) ist einer von mehreren Mechanismen, die WebRTC zum Wiederholen verlorener Nutzlast-Bytes verwendet. Im Allgemeinen bezieht er sich auf die Unterstützung der speziellen Pakete, die in {{rfc("4588")}} definiert sind.
RTX muss während des anfänglichen Handshakes zwischen Sender und Empfänger ausgehandelt werden.
Wenn RTX nicht ausgehandelt wurde, werden die erneut gesendeten Bytes über die gleiche SSRC gesendet; andernfalls werden die Bytes über eine separate SSRC gesendet, aber trotzdem in dieser Eigenschaft berücksichtigt.

Die erneut gesendeten Bytes sind in der von [`bytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats_/bytesSent) gemeldeten Anzahl enthalten.

## Wert

Eine positive Ganzzahl, die die Anzahl der erneut gesendeten Nutzlast-Bytes für die Quelle angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
