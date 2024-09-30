---
title: "RTCRemoteOutboundRtpStreamStats: roundTripTimeMeasurements-Eigenschaft"
short-title: roundTripTimeMeasurements
slug: Web/API/RTCRemoteOutboundRtpStreamStats/roundTripTimeMeasurements
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`roundTripTimeMeasurements`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist ein positiver ganzzahliger Wert, der die Gesamtanzahl der gültigen Messungen der Rundlaufzeit (Round-Trip Time, RTT) darstellt, die für diese [synchronisierende Quelle (SSRC)](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc) empfangen wurden.

Der Zähler kann als Maß für die Verfügbarkeit und Zuverlässigkeit der Messdaten der Rundlaufzeit verwendet werden.

## Wert

Eine positive Zahl, die die Anzahl der gültigen Messungen der Rundlaufzeit angibt.

Dies ist die Anzahl der empfangenen _RTCP Sender Reports (SR)_ für dieses SSRC, die ein "delay since last RR (DLRR)"-Feld enthalten, aus dem eine gültige Rundlaufzeit abgeleitet werden kann (gemäß {{rfc("3611","DLRR Report Block", "4.5")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
