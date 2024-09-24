---
title: "RTCInboundRtpStreamStats: Eigenschaft fecPacketsDiscarded"
short-title: fecPacketsDiscarded
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`fecPacketsDiscarded`** Eigenschaft
des {{domxref("RTCInboundRtpStreamStats")}} Dictionaries ist ein numerischer Wert,
der die Anzahl der verworfenen {{Glossary("RTP")}} Forward Error Correction (FEC) Pakete angibt.

## Wert

Ein vorzeichenloser Ganzzahlwert, der angibt, wie viele FEC-Pakete empfangen wurden, deren Fehlerkorrektur-Payload verworfen wurde.

Dies kann passieren, wenn alle von dem FEC-Paket abgedeckten Pakete bereits empfangen oder mit einem anderen FEC-Paket wiederhergestellt wurden, oder wenn das FEC-Paket außerhalb des Wiederherstellungsfensters angekommen ist und die verlorenen RTP-Pakete während der Wiedergabe bereits übersprungen wurden. Der Wert von `fecPacketsReceived` schließt diese verworfenen Pakete ein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
