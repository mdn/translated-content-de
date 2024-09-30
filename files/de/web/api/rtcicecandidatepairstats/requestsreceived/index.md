---
title: "RTCIceCandidatePairStats: requestsReceived-Eigenschaft"
short-title: requestsReceived
slug: Web/API/RTCIceCandidatePairStats/requestsReceived
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die **`requestsReceived`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Gesamtanzahl der bisher empfangenen [STUN](/de/docs/Glossary/STUN)-Konnektivitätsprüfungsanfragen auf der Verbindung an, die durch dieses Paar von Kandidaten beschrieben wird.

## Wert

Ein ganzzahliger Wert, der die Anzahl der bisher für die auf dieser Paarung von [ICE](/de/docs/Glossary/ICE)-Kandidaten beschriebenen Verbindung empfangenen STUN-Konnektivitäts- und/oder Zustimmungsanfragen angibt.

Da es keine Möglichkeit gibt, zwischen Anfragen zur Überprüfung der Konnektivität und Anfragen zur Überprüfung der Zustimmung zu unterscheiden, umfasst die angegebene Zahl beide Arten von Anfragen.

> [!NOTE]
> Die angegebene Anzahl an Anfragen umfasst auch erneute Übertragungen. Wenn eine Anfrage aufgrund von Netzwerkproblemen wiederholt werden musste, wird sie hier mehrfach gezählt. Dies unterscheidet sich von [`requestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsSent), die _keine_ erneuten Übertragungen umfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
