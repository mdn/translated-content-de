---
title: "RTCRemoteInboundRtpStreamStats: Eigenschaft packetsLost"
short-title: packetsLost
slug: Web/API/RTCRemoteInboundRtpStreamStats/packetsLost
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`packetsLost`** Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}} Wörterbuchs gibt die Gesamtanzahl der {{Glossary("RTP")}}-Pakete zurück, die von der [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc), wie vom entfernten Endpunkt berichtet, seit Beginn des Empfangs verloren gegangen sind.

## Wert

Ein ganzzahliger Wert, der die Anzahl der verlorenen RTP-Pakete angibt.

Dieser Wert kann negativ sein.
Er wird berechnet, indem die Anzahl der empfangenen Pakete von der Anzahl der erwarteten Pakete subtrahiert wird.
Die Anzahl der erwarteten Pakete wird auf eine Weise errechnet, die voraussetzt, dass alle Pakete nur einmal gesendet werden müssen (basierend auf Sequenznummern), während die Anzahl der empfangenen Pakete auch Pakete beinhaltet, die erneut gesendet werden mussten (und daher größer sein kann).
Weitere Informationen finden Sie im Abschnitt "cumulative number of packets lost" in {{RFC("3550", "", "6.4.1")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCRemoteInboundRtpStreamStats.ssrc")}}
- {{domxref("RTCInboundRtpStreamStats.packetsLost")}}
