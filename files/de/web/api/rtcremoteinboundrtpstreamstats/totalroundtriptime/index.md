---
title: "RTCRemoteInboundRtpStreamStats: Eigenschaft totalRoundTripTime"
short-title: totalRoundTripTime
slug: Web/API/RTCRemoteInboundRtpStreamStats/totalRoundTripTime
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`totalRoundTripTime`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die kumulative Summe aller Round-Trip-Time (RTT)-Messungen seit Beginn der Sitzung in Sekunden an.

Die individuelle Round-Trip-Time wird basierend auf den RTCP-Zeitstempeln im RTCP Receiver Report (RR) berechnet und erfordert daher einen DLSR-Wert ungleich 0.
Die durchschnittliche RTT kann berechnet werden, indem `totalRoundTripTime` durch [`roundTripTimeMeasurements`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/roundTripTimeMeasurements) dividiert wird.

## Wert

Eine Zahl, die die gesamte Round-Trip-Time für die Sitzung in Sekunden angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3550","RR: Receiver Report RTCP-Paket", "6.4.2")}}
