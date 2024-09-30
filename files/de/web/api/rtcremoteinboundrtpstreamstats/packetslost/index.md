---
title: "RTCRemoteInboundRtpStreamStats: packetsLost-Eigenschaft"
short-title: packetsLost
slug: Web/API/RTCRemoteInboundRtpStreamStats/packetsLost
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`packetsLost`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats) Wörterbuchs gibt die Gesamtzahl der [RTP](/de/docs/Glossary/RTP)-Pakete an, die von der [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) verloren gegangen sind, wie vom entfernten Endpunkt seit Beginn des Empfangs gemeldet.

## Wert

Ein ganzzahliger Wert, der die Anzahl der verlorenen RTP-Pakete angibt.

Dieser Wert kann negativ sein.
Er wird ermittelt, indem die Anzahl der empfangenen Pakete von der Anzahl der erwarteten Pakete subtrahiert wird.
Die Anzahl der erwarteten Pakete wird auf eine Weise berechnet, die davon ausgeht, dass alle Pakete nur einmal gesendet werden müssen (basierend auf Sequenznummern), während die Anzahl der empfangenen Pakete auch alle Pakete einschließt, die erneut gesendet werden mussten (und daher größer sein kann).
Für weitere Informationen siehe den Abschnitt "kumulative Anzahl verlorener Pakete" in {{RFC("3550", "", "6.4.1")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRemoteInboundRtpStreamStats.ssrc`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc)
- [`RTCInboundRtpStreamStats.packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
