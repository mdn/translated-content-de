---
title: "RTCRemoteInboundRtpStreamStats: Eigenschaft roundTripTime"
short-title: roundTripTime
slug: Web/API/RTCRemoteInboundRtpStreamStats/roundTripTime
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`roundTripTime`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}} Wörterbuchs gibt die geschätzte Round-Trip-Zeit (RTT) für diese [Synchronization Source (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) in Sekunden an.

Die Round-Trip-Zeit wird basierend auf den RTCP-Zeitstempeln im RTCP Sender Report (SR) berechnet und erfordert einen Bericht mit einem Delay Since Last SR (DLSR)-Block, der einen anderen Wert als 0 hat. Die Eigenschaft existiert nicht, bis ein solcher Bericht empfangen wurde.

Beachten Sie, dass die _durchschnittliche_ RTT für die Sitzung berechnet werden kann, indem {{domxref("RTCRemoteInboundRtpStreamStats.totalRoundTripTime","totalRoundTripTime")}} durch {{domxref("RTCRemoteInboundRtpStreamStats.roundTripTimeMeasurements","roundTripTimeMeasurements")}} geteilt wird.

## Wert

Eine Zahl, die die aktuell geschätzte Round-Trip-Zeit in Sekunden angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3550","SR: Sender Report RTCP Packet", "6.4.1")}}
