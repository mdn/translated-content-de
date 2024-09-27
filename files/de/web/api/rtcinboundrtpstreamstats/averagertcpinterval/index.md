---
title: "RTCInboundRtpStreamStats: averageRtcpInterval-Eigenschaft"
short-title: averageRtcpInterval
slug: Web/API/RTCInboundRtpStreamStats/averageRtcpInterval
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`averageRtcpInterval`**-Eigenschaft
des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein Gleitkommawert, der das durchschnittliche [RTCP](/de/docs/Glossary/RTCP)-Übertragungsintervall in Sekunden angibt.

Das RTCP-Intervall ist die Zeitspanne, die zwischen den Übertragungen von RTCP-Paketen vergehen sollte.

## Wert

Ein Gleitkommawert, der das durchschnittliche Intervall in Sekunden zwischen den Übertragungen von RTCP-Paketen angibt. Dieses Intervall wird nach der in {{RFC(1889, "A.7")}} beschriebenen Formel berechnet.

Da der Wert des Intervalls teilweise durch die Anzahl der aktiven Sender bestimmt wird, wird er für jeden Benutzer eines Dienstes unterschiedlich sein. Da dieser Wert auch zur Bestimmung der Anzahl der Sekunden verwendet wird, die nach dem Start des Streamflows vergehen sollen, bevor das erste RTCP-Paket gesendet wird, führt dies dazu, dass, wenn viele Benutzer versuchen, den Dienst zur gleichen Zeit zu nutzen, der Server nicht mit RTCP-Paketen, die alle auf einmal eintreffen, überflutet wird.

Der sendende Endpunkt berechnet diesen Wert beim Senden von kombinierten RTCP-Paketen, die mindestens ein RTCP RR- oder SR-Paket und ein SDES-Paket mit dem CNAME-Element enthalten müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
