---
title: "RTCInboundRtpStreamStats: fecPacketsDiscarded-Eigenschaft"
short-title: fecPacketsDiscarded
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`fecPacketsDiscarded`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Anzahl der {{Glossary("RTP", "RTP")}} Forward Error Correction (FEC)-Pakete an, die verworfen wurden.

Ein FEC-Paket liefert Paritätsinformationen, die verwendet werden können, um zu versuchen, RTP-Datenpakete zu rekonstruieren, die während der Übertragung beschädigt wurden. Diese Art von Paket könnte verworfen werden, wenn alle abgedeckten Pakete bereits empfangen oder mit einem anderen FEC-Paket wiederhergestellt wurden, oder wenn das FEC-Paket außerhalb des Wiederherstellungsfensters angekommen ist und die verlorenen RTP-Pakete bereits während der Wiedergabe übersprungen wurden. Der Wert von [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived) umfasst diese verworfenen Pakete.

## Wert

Ein positiver ganzzahliger Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
