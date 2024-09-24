---
title: "RTCRemoteInboundRtpStreamStats: Eigenschaft roundTripTimeMeasurements"
short-title: roundTripTimeMeasurements
slug: Web/API/RTCRemoteInboundRtpStreamStats/roundTripTimeMeasurements
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`roundTripTimeMeasurements`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}}-Wörterbuchs enthält einen positiven ganzzahligen Wert, der die Gesamtanzahl der gültigen Round-Trip-Time-Messungen für diese [synchronisierende Quelle](#ssrc) darstellt.

Die Anzahl kann als Maß für die Verfügbarkeit und Zuverlässigkeit von Round-Trip-Time-Messdaten verwendet werden.

## Wert

Eine positive Zahl, die die Anzahl der gültigen Round-Trip-Time-Messungen angibt.

Dies ist die Anzahl der _RTCP Receiver Reports (RR)_, die für diese [synchronisierende Quelle](#ssrc) empfangen wurden und die einen nicht-null Wert für das Feld "delay since last SR (DLSR)" enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3550","RR: Receiver Report RTCP Packet", "6.4.2")}}
