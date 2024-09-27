---
title: "RTCRemoteOutboundRtpStreamStats: roundTripTimeMeasurements-Eigenschaft"
short-title: roundTripTimeMeasurements
slug: Web/API/RTCRemoteOutboundRtpStreamStats/roundTripTimeMeasurements
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`roundTripTimeMeasurements`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist ein positiver Ganzzahlenwert, der die Gesamtzahl der gültigen Rundlaufzeitmessungen darstellt, die für diese [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc) empfangen wurden.

Die Anzahl kann als Maß für die Verfügbarkeit und Zuverlässigkeit der Daten zur Rundlaufzeitmessung verwendet werden.

## Wert

Eine positive Zahl, die die Anzahl der gültigen Rundlaufzeitmessungen angibt.

Dies ist die Anzahl der für diese SSRC empfangenen _RTCP Sender Reports (SR)_, die ein "Verzögerung seit dem letzten RR (DLRR)"-Feld enthalten, aus dem eine gültige Rundlaufzeit abgeleitet werden kann (gemäß {{rfc("3611","DLRR Report Block", "4.5")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
