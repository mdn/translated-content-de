---
title: "RTCOutboundRtpStreamStats: averageRtcpInterval-Eigenschaft"
short-title: averageRtcpInterval
slug: Web/API/RTCOutboundRtpStreamStats/averageRtcpInterval
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`averageRtcpInterval`** Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) Wörterbuchs ist ein Gleitkommawert, der die durchschnittliche Zeit angibt, die zwischen der Übertragung von [RTCP](/de/docs/Glossary/RTCP)-Paketen auf diesem Stream vergehen sollte.

## Wert

Ein Gleitkommawert, der das durchschnittliche Intervall in Sekunden zwischen der Übertragung von RTCP-Paketen angibt. Dieses Intervall wird nach der im {{RFC(1889, "A.7")}} umrissenen Formel berechnet.

Da der Wert des Intervalls teilweise von der Anzahl der aktiven Absender abhängt, wird er für jeden Nutzer eines Dienstes unterschiedlich sein. Da dieser Wert auch verwendet wird, um zu bestimmen, wie viele Sekunden nach dem Beginn eines Streams vergehen sollten, bevor das erste RTCP-Paket gesendet wird, ergibt sich, dass, wenn viele Nutzer gleichzeitig versuchen, den Dienst zu nutzen, der Server nicht durch RTCP-Pakete überflutet wird, die alle gleichzeitig eintreffen.

Der sendende Endpunkt berechnet diesen Wert beim Senden von zusammengesetzten RTCP-Paketen, die mindestens ein RTCP RR oder SR Paket und ein SDES Paket mit dem CNAME-Element enthalten müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
