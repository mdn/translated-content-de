---
title: "RTCInboundRtpStreamStats: averageRtcpInterval-Eigenschaft"
short-title: averageRtcpInterval
slug: Web/API/RTCInboundRtpStreamStats/averageRtcpInterval
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`averageRtcpInterval`**-Eigenschaft des {{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs ist ein Gleitkommawert, der das durchschnittliche Übertragungsintervall von {{Glossary("RTCP")}} in Sekunden angibt.

Das RTCP-Intervall ist der Zeitraum, der zwischen den Übertragungen von RTCP-Paketen verstreichen sollte.

## Wert

Ein Gleitkommawert, der das durchschnittliche Intervall in Sekunden zwischen den Übertragungen von RTCP-Paketen angibt. Dieses Intervall wird gemäß der in {{RFC(1889, "A.7")}} beschriebenen Formel berechnet.

Da der Wert des Intervalls teilweise von der Anzahl der aktiven Sender abhängt, wird er sich für jeden Benutzer eines Dienstes unterscheiden. Da dieser Wert auch verwendet wird, um die Anzahl der Sekunden zu bestimmen, die nach dem Start eines Datenstroms vergehen, bevor das erste RTCP-Paket gesendet werden soll, wird verhindert, dass der Server von RTCP-Paketen überflutet wird, wenn viele Benutzer gleichzeitig versuchen, den Dienst zu nutzen.

Der sendende Endpunkt berechnet diesen Wert beim Senden von zusammengesetzten RTCP-Paketen, die mindestens ein RTCP RR- oder SR-Paket und ein SDES-Paket mit dem CNAME-Element enthalten müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
