---
title: "RTCRemoteInboundRtpStreamStats: roundTripTimeMeasurements-Eigenschaft"
short-title: roundTripTimeMeasurements
slug: Web/API/RTCRemoteInboundRtpStreamStats/roundTripTimeMeasurements
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

{{APIRef("WebRTC")}}

Die **`roundTripTimeMeasurements`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs enthält einen positiven ganzzahligen Wert, der die Gesamtanzahl gültiger Round-Trip-Zeitmessungen darstellt, die für diese [synchronisierende Quelle](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) empfangen wurden.

Die Anzahl kann als Maß für die Verfügbarkeit und Zuverlässigkeit der Round-Trip-Zeitmessdaten verwendet werden.

## Wert

Eine positive Zahl, die die Anzahl gültiger Round-Trip-Zeitmessungen angibt.

Dies ist die Anzahl der empfangenen _RTCP Receiver Reports (RR)_ für diese [synchronisierende Quelle](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc), die einen Nicht-Null-Wert für das Feld "Verzögerung seit letztem SR (DLSR)" enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3550","RR: Receiver Report RTCP Packet", "6.4.2")}}
