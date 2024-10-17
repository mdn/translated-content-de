---
title: "RTCIceCandidatePairStats: requestsReceived-Eigenschaft"
short-title: requestsReceived
slug: Web/API/RTCIceCandidatePairStats/requestsReceived
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Die **`requestsReceived`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Gesamtzahl der bisher empfangenen {{Glossary("STUN", "STUN")}}-Konnektivitätsüberprüfungsanfragen auf der durch diese Paarung von Kandidaten beschriebenen Verbindung an.

## Wert

Ein ganzzahliger Wert, der die Anzahl der STUN-Konnektivitäts- und/oder Einverständnisanfragen angibt, die bisher auf der durch dieses Paar von {{Glossary("ICE", "ICE")}}-Kandidaten beschriebenen Verbindung empfangen wurden.

Da es nicht möglich ist, zwischen Anfragen zur Überprüfung der Konnektivität und Anfragen zur Überprüfung des Einverständnisses zu unterscheiden, umfasst die zurückgegebene Zahl beide.

> [!NOTE]
> Die gemeldete Anzahl der Anfragen umfasst Übertragungswiederholungen. Wenn eine
> Anfrage aufgrund von Netzwerkproblemen wiederholt werden musste, wird sie hier mehrfach gezählt.
> Dies unterscheidet sich von [`requestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsSent), das _keine_ Übertragungswiederholungen enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
