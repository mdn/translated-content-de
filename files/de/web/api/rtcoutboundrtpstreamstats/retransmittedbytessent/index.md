---
title: "RTCOutboundRtpStreamStats: retransmittedBytesSent-Eigenschaft"
short-title: retransmittedBytesSent
slug: Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("WebRTC")}}

Die **`retransmittedBytesSent`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs repräsentiert die Gesamtanzahl der Nutzlast-Bytes, die für die Quelle, die mit diesem Stream verknüpft ist, erneut gesendet wurden.

RTX (Retransmission) ist einer von mehreren Mechanismen, die WebRTC für die erneute Übertragung verlorener Nutzlast-Bytes verwendet, und bezieht sich im Allgemeinen auf die Unterstützung der speziellen Pakete, die in {{rfc("4588")}} definiert sind.
RTX muss zwischen dem Sender und dem Empfänger während des initialen Handshakes ausgehandelt werden.
Wenn RTX nicht ausgehandelt wurde, werden die erneut gesendeten Bytes über die gleiche SSRC gesendet; andernfalls werden die Bytes über einen separaten SSRC gesendet, werden jedoch weiterhin in dieser Eigenschaft berücksichtigt.

Die erneut gesendeten Bytes sind in der von [`bytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/bytesSent) gemeldeten Anzahl enthalten.

## Wert

Eine positive Ganzzahl, die die Anzahl der erneut gesendeten Nutzlast-Bytes für die Quelle angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
