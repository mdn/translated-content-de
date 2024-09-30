---
title: "RTCRemoteInboundRtpStreamStats: roundTripTimeMeasurements-Eigenschaft"
short-title: roundTripTimeMeasurements
slug: Web/API/RTCRemoteInboundRtpStreamStats/roundTripTimeMeasurements
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`roundTripTimeMeasurements`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs enthält einen positiven Ganzzahlwert, der die Gesamtanzahl der gültigen Laufzeitmessungen (round trip time) darstellt, die für diese [Synchronisationsquelle](#ssrc) empfangen wurden.

Diese Anzahl kann als Maß für die Verfügbarkeit und Zuverlässigkeit der Daten zur Laufzeitmessung verwendet werden.

## Wert

Eine positive Zahl, die die Anzahl der gültigen Laufzeitmessungen angibt.

Dies ist die Anzahl der empfangenen _RTCP Receiver Reports (RR)_ für diese [Synchronisationsquelle](#ssrc), die einen ungleich null Wert für das Feld "delay since last SR (DLSR)" enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3550","RR: Receiver Report RTCP Packet", "6.4.2")}}
