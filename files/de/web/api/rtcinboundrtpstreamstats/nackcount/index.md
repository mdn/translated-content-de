---
title: "RTCInboundRtpStreamStats: nackCount Eigenschaft"
short-title: nackCount
slug: Web/API/RTCInboundRtpStreamStats/nackCount
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`nackCount`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt an, wie oft der Empfänger ein **NACK**-Paket an den Sender gesendet hat.

Ein NACK-Paket (Negative ACKnowledgement, auch "Generic NACK" genannt) teilt dem Sender mit, dass eines oder mehrere der vom Sender gesendeten {{Glossary("RTP", "RTP")}}-Pakete während des Transports verloren gegangen sind.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
