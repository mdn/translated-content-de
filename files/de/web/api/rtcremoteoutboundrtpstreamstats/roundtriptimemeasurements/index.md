---
title: "RTCRemoteOutboundRtpStreamStats: roundTripTimeMeasurements-Eigenschaft"
short-title: roundTripTimeMeasurements
slug: Web/API/RTCRemoteOutboundRtpStreamStats/roundTripTimeMeasurements
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`roundTripTimeMeasurements`**-Eigenschaft des {{domxref("RTCRemoteOutboundRtpStreamStats")}} Wörterbuchs ist ein positiver Ganzzahlenwert, der die Gesamtanzahl der gültigen Laufzeitmessungen (Round Trip Time) darstellt, die für diese [synchronizing source (SSRC)](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc) empfangen wurden.

Die Zählung kann als Maß für die Verfügbarkeit und Zuverlässigkeit von Laufzeitmessungsdaten verwendet werden.

## Wert

Eine positive Zahl, die die Anzahl der gültigen Laufzeitmessungen angibt.

Dies ist die Anzahl der _RTCP Sender Reports (SR)_, die für diese SSRC empfangen wurden und ein "delay since last RR (DLRR)"-Feld enthalten, aus dem eine gültige Laufzeit abgeleitet werden kann (gemäß {{rfc("3611","DLRR Report Block", "4.5")}}).

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
