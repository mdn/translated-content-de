---
title: "RTCRemoteInboundRtpStreamStats: Eigenschaft totalRoundTripTime"
short-title: totalRoundTripTime
slug: Web/API/RTCRemoteInboundRtpStreamStats/totalRoundTripTime
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`totalRoundTripTime`** des {{domxref("RTCRemoteInboundRtpStreamStats")}}-Wörterbuchs zeigt die kumulative Summe aller Rundlaufzeit-Messungen (RTT) seit Beginn der Sitzung in Sekunden an.

Die individuelle Rundlaufzeit wird basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht (Receiver Report, RR) berechnet und erfordert daher einen DLSR-Wert ungleich 0. Die durchschnittliche RTT kann berechnet werden, indem `totalRoundTripTime` durch {{domxref("RTCRemoteInboundRtpStreamStats.roundTripTimeMeasurements","roundTripTimeMeasurements")}} geteilt wird.

## Wert

Eine Zahl, die die gesamte Rundlaufzeit für die Sitzung in Sekunden angibt.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{rfc("3550","RR: RTCP-Empfängerberichtspaket", "6.4.2")}}
