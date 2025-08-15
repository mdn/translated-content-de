---
title: "RTCInboundRtpStreamStats: packetsLost-Eigenschaft"
short-title: packetsLost
slug: Web/API/RTCInboundRtpStreamStats/packetsLost
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`packetsLost`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats) Wörterbuchs gibt die Gesamtzahl der {{Glossary("RTP", "RTP")}}-Pakete zurück, die von der [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc) seit Beginn des Empfangs verloren gegangen sind.

Beachten Sie, dass dies negativ sein kann.

## Wert

Ein ganzzahliger Wert.

Der Wert wird durch Subtraktion der Anzahl der empfangenen Pakete von der Anzahl der erwarteten Pakete ermittelt. Die Anzahl der erwarteten Pakete wird auf eine Weise berechnet, die davon ausgeht, dass alle Pakete nur einmal gesendet werden müssen (basierend auf den Sequenznummern), während die Anzahl der empfangenen Pakete auch alle Pakete umfasst, die erneut gesendet werden mussten (und daher größer sein kann). Weitere Informationen finden Sie im Abschnitt "cumulative number of packets lost" in {{RFC("3550", "", "6.4.1")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCInboundRtpStreamStats.ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
- [`RTCRemoteInboundRtpStreamStats.packetsLost`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsLost)
- [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
- [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost)
