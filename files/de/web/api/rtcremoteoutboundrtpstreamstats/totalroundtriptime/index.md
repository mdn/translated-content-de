---
title: "RTCRemoteOutboundRtpStreamStats: totalRoundTripTime Eigenschaft"
short-title: totalRoundTripTime
slug: Web/API/RTCRemoteOutboundRtpStreamStats/totalRoundTripTime
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalRoundTripTime`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs gibt die Summe aller Round-Trip-Time (RTT)-Messungen seit Beginn der Sitzung in Sekunden an.

Die individuelle Round-Trip-Time wird basierend auf RTCP-Zeitstempeln im DLRR-Berichtblock der RTCP Sender Reports (SR) berechnet. Der durchschnittliche RTT kann berechnet werden, indem `totalRoundTripTime` durch [`roundTripTimeMeasurements`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/roundTripTimeMeasurements) geteilt wird.

## Wert

Eine Zahl, die die gesamte Round-Trip-Time für die Sitzung in Sekunden angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3611","DLRR Report Block", "4.5")}}
