---
title: "RTCIceCandidatePairStats: requestsReceived-Eigenschaft"
short-title: requestsReceived
slug: Web/API/RTCIceCandidatePairStats/requestsReceived
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die **`requestsReceived`**-Eigenschaft des {{domxref("RTCIceCandidatePairStats")}}-Wörterbuchs gibt die Gesamtanzahl der bisher empfangenen STUN-Konnektivitätsprüfanfragen auf der Verbindung an, die durch diese Paarung von Kandidaten beschrieben wird.

## Wert

Ein ganzzahliger Wert, der die Anzahl der STUN-Konnektivitäts- und/oder Zustimmungsanfragen angibt, die bisher auf der Verbindung empfangen wurden, die durch dieses Paar von ICE-Kandidaten beschrieben wird.

Da es keine Möglichkeit gibt, zwischen Anfragen zur Überprüfung der Konnektivität und Anfragen zur Überprüfung der Zustimmung zu unterscheiden, umfasst der zurückgegebene Wert beide.

> [!NOTE]
> Die gemeldete Anzahl von Anfragen beinhaltet auch Wiederholungen. Wenn eine Anfrage aufgrund von Netzwerkproblemen mehrfach gesendet werden musste, wird sie hier mehrfach gezählt. Dies unterscheidet sich von {{domxref("RTCIceCandidatePairStats.requestsSent", "requestsSent")}}, die _keine_ Wiederholungen beinhaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
