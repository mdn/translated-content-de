---
title: "RTCInboundRtpStreamStats: averageRtcpInterval Eigenschaft"
short-title: averageRtcpInterval
slug: Web/API/RTCInboundRtpStreamStats/averageRtcpInterval
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}

Die **`averageRtcpInterval`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein Gleitkommawert, der das durchschnittliche {{Glossary("RTCP", "RTCP")}}-Übertragungsintervall in Sekunden angibt.

Das RTCP-Intervall ist die Zeitspanne, die zwischen den Übertragungen von RTCP-Paketen verstreichen sollte.

## Wert

Ein Gleitkommawert, der das durchschnittliche Intervall in Sekunden zwischen den Übertragungen von RTCP-Paketen angibt. Dieses Intervall wird gemäß der in {{RFC(1889, "A.7")}} skizzierten Formel berechnet.

Da der Wert des Intervalls teilweise von der Anzahl der aktiven Sender abhängt, wird er für jeden Benutzer eines Dienstes unterschiedlich sein. Da dieser Wert auch verwendet wird, um die Anzahl der Sekunden zu bestimmen, die vergehen sollen, bevor das erste RTCP-Paket gesendet wird, nachdem ein Stream zu fließen beginnt, führt dies dazu, dass der Server nicht von RTCP-Paketen überschwemmt wird, wenn viele Benutzer versuchen, den Dienst gleichzeitig zu nutzen.

Der sendende Endpunkt berechnet diesen Wert beim Senden von zusammengesetzten RTCP-Paketen, die mindestens ein RTCP RR- oder SR-Paket und ein SDES-Paket mit dem CNAME-Element enthalten müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
