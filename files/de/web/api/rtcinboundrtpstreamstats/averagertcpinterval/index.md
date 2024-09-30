---
title: "RTCInboundRtpStreamStats: averageRtcpInterval-Eigenschaft"
short-title: averageRtcpInterval
slug: Web/API/RTCInboundRtpStreamStats/averageRtcpInterval
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`averageRtcpInterval`**-Eigenschaft
des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Dictionaries ist ein Gleitkommawert,
der das durchschnittliche [RTCP](/de/docs/Glossary/RTCP)-Übertragungsintervall in Sekunden angibt.

Das RTCP-Intervall ist die Zeitspanne, die zwischen den Übertragungen von RTCP-Paketen vergehen sollte.

## Wert

Ein Gleitkommawert, der das durchschnittliche Intervall in Sekunden zwischen den Übertragungen von RTCP-Paketen angibt. Dieses Intervall wird gemäß der im {{RFC(1889, "A.7")}} dargelegten Formel berechnet.

Da der Wert des Intervalls teilweise durch die Anzahl der aktiven Sender bestimmt wird, ist er für jeden Nutzer eines Dienstes unterschiedlich. Da dieser Wert auch verwendet wird, um zu bestimmen, wie viele Sekunden nach dem Beginn eines Stroms vergehen sollten, bevor das erste RTCP-Paket gesendet wird, sorgt dies dafür, dass der Server nicht mit RTCP-Paketen überflutet wird, wenn viele Nutzer versuchen, den Dienst gleichzeitig zu nutzen.

Der sendende Endpunkt berechnet diesen Wert beim Senden von zusammengesetzten RTCP-Paketen, die mindestens ein RTCP RR- oder SR-Paket und ein SDES-Paket mit dem CNAME-Element enthalten müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
