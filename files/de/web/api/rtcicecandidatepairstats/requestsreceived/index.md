---
title: "RTCIceCandidatePairStats: requestsReceived-Eigenschaft"
short-title: requestsReceived
slug: Web/API/RTCIceCandidatePairStats/requestsReceived
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`requestsReceived`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Gesamtzahl der {{Glossary("STUN", "STUN")}}-Konnektivitätsprüfanfragen an, die bisher auf der durch diese Paarung von Kandidaten beschriebenen Verbindung eingegangen sind.

## Wert

Ein ganzzahliger Wert, der die Anzahl der STUN-Konnektivitäts- und/oder Zustimmungsgesuche angibt, die bis heute auf der durch dieses Paar von {{Glossary("ICE", "ICE")}}-Kandidaten beschriebenen Verbindung eingegangen sind.

Da es keine Möglichkeit gibt, zwischen Anfragen zur Überprüfung der Konnektivität und Anfragen zur Überprüfung der Zustimmung zu unterscheiden, umfasst die zurückgegebene Zahl beide.

> [!NOTE]
> Die gemeldete Anzahl von Anforderungen umfasst auch erneute Übertragungen.
> Wenn eine Anfrage aufgrund von Netzwerkproblemen wiederholt werden musste, wird sie hier mehrfach gezählt.
> Dies unterscheidet sich von [`requestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsSent), das _keine_ erneuten Übertragungen einbezieht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
