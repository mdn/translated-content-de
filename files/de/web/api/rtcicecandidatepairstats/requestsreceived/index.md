---
title: "RTCIceCandidatePairStats: requestsReceived-Eigenschaft"
short-title: requestsReceived
slug: Web/API/RTCIceCandidatePairStats/requestsReceived
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die **`requestsReceived`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Gesamtzahl der bisher auf der Verbindung empfangenen [STUN](/de/docs/Glossary/STUN)-Verbindungsprüfungsanforderungen an, die durch dieses Kandidatenpaar beschrieben wird.

## Wert

Ein ganzzahliger Wert, der die Anzahl der bisher auf der durch dieses Paar von [ICE](/de/docs/Glossary/ICE)-Kandidaten beschriebenen Verbindung empfangenen STUN-Verbindungs- und/oder Zustimmungserweiterungsanforderungen spezifiziert.

Da es nicht möglich ist, zwischen Anfragen zur Überprüfung der Konnektivität und Anfragen zur Zustimmungserweiterung zu unterscheiden, umfasst die zurückgegebene Zahl beide.

> [!NOTE]
> Die gemeldete Anzahl der Anfragen umfasst auch erneute Übertragungen. Wenn eine Anfrage aufgrund von Netzwerkproblemen wiederholt werden musste, wird sie hier mehrfach gezählt. Dies unterscheidet sich von [`requestsSent`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsSent), das _keine_ erneuten Übertragungen umfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
