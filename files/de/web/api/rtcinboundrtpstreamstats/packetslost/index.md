---
title: "RTCInboundRtpStreamStats: packetsLost-Eigenschaft"
short-title: packetsLost
slug: Web/API/RTCInboundRtpStreamStats/packetsLost
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

{{APIRef("WebRTC")}}

Die **`packetsLost`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtzahl der {{Glossary("RTP", "RTP")}}-Pakete zurück, die seit Beginn des Empfangs von der [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc) verloren gegangen sind.

Beachten Sie, dass dieser Wert negativ sein kann.

## Wert

Ein ganzzahliger Wert.

Der Wert wird ermittelt, indem die Anzahl der empfangenen Pakete von der Anzahl der erwarteten Pakete subtrahiert wird. Die Anzahl der erwarteten Pakete wird auf eine Weise berechnet, die annimmt, dass alle Pakete nur einmal gesendet werden müssen (basierend auf Sequenznummern), während die Anzahl der empfangenen Pakete auch alle Pakete einschließt, die erneut gesendet werden mussten (und daher größer sein kann). Weitere Informationen finden Sie im Abschnitt "cumulative number of packets lost" in {{RFC("3550", "", "6.4.1")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCInboundRtpStreamStats.ssrc`](/de/docs/Web/API/RTCInboundRtpStreamStats/ssrc)
- [`RTCRemoteInboundRtpStreamStats.packetsLost`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsLost)
- [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded)
