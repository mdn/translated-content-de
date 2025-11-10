---
title: "RTCInboundRtpStreamStats: fecPacketsDiscarded-Eigenschaft"
short-title: fecPacketsDiscarded
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}

Die **`fecPacketsDiscarded`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Anzahl der {{Glossary("RTP", "RTP")}}-Forward Error Correction (FEC)-Pakete an, die verworfen wurden.

Ein FEC-Paket liefert Paritätsinformationen, die verwendet werden können, um zu versuchen, RTP-Datenpakete zu rekonstruieren, die während der Übertragung beschädigt wurden. Diese Art von Paket könnte verworfen werden, wenn alle Pakete, die es abdeckt, bereits empfangen oder mit einem anderen FEC-Paket wiederhergestellt wurden, oder wenn das FEC-Paket außerhalb des Wiederherstellungsfensters eintrifft und die verlorenen RTP-Pakete bereits während der Wiedergabe übersprungen wurden. Der Wert von [`fecPacketsReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived) umfasst diese verworfenen Pakete.

## Wert

Ein positiver ganzzahliger Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
