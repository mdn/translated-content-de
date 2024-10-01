---
title: "RTCInboundRtpStreamStats: fecPacketsDiscarded-Eigenschaft"
short-title: fecPacketsDiscarded
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`fecPacketsDiscarded`**-Eigenschaft
des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Wörterbuchs ist ein numerischer Wert,
der die Anzahl der {{Glossary("RTP", "RTP")}} Forward Error Correction (FEC)-Pakete angibt,
die verworfen wurden.

## Wert

Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele FEC-Pakete empfangen wurden, deren
Fehlerkorrektur-Nutzlast verworfen wurde.

Dies kann passieren, wenn alle Pakete, die durch das FEC-Paket abgedeckt sind, bereits empfangen
oder mit einem anderen FEC-Paket wiederhergestellt wurden, oder wenn das FEC-Paket außerhalb des Wiederherstellungsfensters angekommen ist und die verlorenen RTP-Pakete bereits während der Wiedergabe übersprungen wurden. Der Wert von `fecPacketsReceived` beinhaltet diese verworfenen Pakete.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
