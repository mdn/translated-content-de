---
title: "RTCOutboundRtpStreamStats: averageRtcpInterval-Eigenschaft"
short-title: averageRtcpInterval
slug: Web/API/RTCOutboundRtpStreamStats/averageRtcpInterval
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`averageRtcpInterval`**-Eigenschaft
des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein Gleitkommawert,
der die durchschnittliche Zeit angibt, die zwischen den Übertragungen von
[RTCP](/de/docs/Glossary/RTCP)-Paketen in diesem Stream vergehen sollte.

## Wert

Ein Gleitkommawert, der das durchschnittliche Intervall in Sekunden zwischen
den Übertragungen von RTCP-Paketen angibt. Dieses Intervall wird gemäß der im {{RFC(1889, "A.7")}}
beschriebenen Formel berechnet.

Da der Wert des Intervalls teilweise von der Anzahl der aktiven Sender abhängt,
wird er für jeden Nutzer eines Dienstes unterschiedlich sein. Da dieser Wert auch zur Bestimmung
der Anzahl von Sekunden verwendet wird, die vergehen sollen, bevor der erste RTCP-Paket gesendet wird,
verhindert dies, dass der Server von RTCP-Paketen, die gleichzeitig eintreffen, überflutet wird,
wenn viele Nutzer gleichzeitig beginnen, den Dienst zu nutzen.

Der sendende Endpunkt berechnet diesen Wert beim Senden komplexer RTCP-Pakete, die mindestens
ein RTCP RR- oder SR-Paket und ein SDES-Paket mit dem CNAME-Element enthalten müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
