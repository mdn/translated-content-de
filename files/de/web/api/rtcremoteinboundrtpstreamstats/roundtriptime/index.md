---
title: "RTCRemoteInboundRtpStreamStats: roundTripTime-Eigenschaft"
short-title: roundTripTime
slug: Web/API/RTCRemoteInboundRtpStreamStats/roundTripTime
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`roundTripTime`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die geschätzte Round-Trip-Time (RTT) für diese [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) in Sekunden an.

Die Round-Trip-Time wird basierend auf den RTCP-Zeitstempeln im RTCP Sender Report (SR) berechnet und erfordert einen Bericht mit einem Delay Since Last SR (DLSR)-Block, der einen anderen Wert als 0 hat. Die Eigenschaft existiert erst, nachdem ein solcher Bericht empfangen wurde.

Beachten Sie, dass die _durchschnittliche_ RTT für die Sitzung berechnet werden kann, indem [`totalRoundTripTime`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/totalRoundTripTime) durch [`roundTripTimeMeasurements`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/roundTripTimeMeasurements) geteilt wird.

## Wert

Eine Zahl, die die aktuelle geschätzte Round-Trip-Time in Sekunden angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3550","SR: Sender Report RTCP-Paket", "6.4.1")}}
