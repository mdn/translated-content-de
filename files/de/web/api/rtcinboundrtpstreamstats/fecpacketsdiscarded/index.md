---
title: "RTCInboundRtpStreamStats: Eigenschaft fecPacketsDiscarded"
short-title: fecPacketsDiscarded
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`fecPacketsDiscarded`**-Eigenschaft
des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein numerischer Wert,
der die Anzahl der [RTP](/de/docs/Glossary/RTP)-Pakete der Vorwärtsfehlerkorrektur (FEC) angibt, die verworfen wurden.

## Wert

Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele FEC-Pakete empfangen wurden, deren
Fehlerkorrektur-Nutzdaten verworfen wurden.

Dies kann passieren, wenn alle von dem FEC-Paket abgedeckten Pakete bereits empfangen
oder mithilfe eines anderen FEC-Pakets wiederhergestellt wurden oder wenn das FEC-Paket außerhalb des Wiederherstellungsfensters angekommen ist und die verlorenen RTP-Pakete als Ergebnis während der Wiedergabe bereits übersprungen wurden.
Der Wert von `fecPacketsReceived` umfasst diese verworfenen Pakete.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
