---
title: "RTCOutboundRtpStreamStats: averageRtcpInterval-Eigenschaft"
short-title: averageRtcpInterval
slug: Web/API/RTCOutboundRtpStreamStats/averageRtcpInterval
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`averageRtcpInterval`**-Eigenschaft des {{domxref("RTCOutboundRtpStreamStats")}}-Wörterbuchs ist ein Gleitkommawert, der die durchschnittliche Zeit angibt, die zwischen den Übertragungen von {{Glossary("RTCP")}}-Paketen auf diesem Stream vergehen sollte.

## Wert

Ein Gleitkommawert, der das durchschnittliche Intervall in Sekunden zwischen den Übertragungen von RTCP-Paketen angibt. Dieses Intervall wird gemäß der im {{RFC(1889, "A.7")}} beschriebenen Formel berechnet.

Da der Wert des Intervalls teilweise von der Anzahl der aktiven Sender abhängt, wird er für jeden Benutzer eines Dienstes unterschiedlich sein. Da dieser Wert auch dazu verwendet wird, die Anzahl der Sekunden zu bestimmen, die vergehen müssen, bevor das erste RTCP-Paket gesendet werden sollte, nachdem ein Stream zu fließen beginnt, wird dadurch verhindert, dass der Server von RTCP-Paketen überschwemmt wird, wenn viele Benutzer gleichzeitig versuchen, den Dienst zu nutzen.

Das sendende Endgerät berechnet diesen Wert beim Senden von zusammengesetzten RTCP-Paketen, die mindestens ein RTCP RR- oder SR-Paket und ein SDES-Paket mit dem CNAME-Element enthalten müssen.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
