---
title: "RTCRemoteOutboundRtpStreamStats: Eigenschaft totalRoundTripTime"
short-title: totalRoundTripTime
slug: Web/API/RTCRemoteOutboundRtpStreamStats/totalRoundTripTime
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalRoundTripTime`**-Eigenschaft des {{domxref("RTCRemoteOutboundRtpStreamStats")}}-Dictionaries gibt die Summe aller Round-Trip-Time (RTT)-Messungen seit Beginn der Sitzung in Sekunden an.

Die einzelne Round-Trip-Time wird basierend auf RTCP-Zeitstempeln im DLRR-Berichtsblock von RTCP-Senderberichten (SR) berechnet. Die durchschnittliche RTT kann berechnet werden, indem `totalRoundTripTime` durch {{domxref("RTCRemoteOutboundRtpStreamStats.roundTripTimeMeasurements","roundTripTimeMeasurements")}} geteilt wird.

## Wert

Eine Zahl, die die gesamte Round-Trip-Time der Sitzung in Sekunden angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3611","DLRR-Berichtsblock", "4.5")}}
