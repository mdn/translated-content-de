---
title: "RTCIceCandidatePairStats: requestsSent-Eigenschaft"
short-title: requestsSent
slug: Web/API/RTCIceCandidatePairStats/requestsSent
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die **`requestsSent`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Gesamtanzahl der bisher gesendeten [STUN](/de/docs/Glossary/STUN)-Konnektivitätsprüfungsanfragen auf der Verbindung an, die durch dieses Paar von Kandidaten beschrieben wird.

## Wert

Ein ganzzahliger Wert, der die Anzahl der bisher gesendeten STUN-Konnektivitätsanfragen auf der Verbindung angibt, die durch dieses Paar von [ICE](/de/docs/Glossary/ICE)-Kandidaten beschrieben wird.

> [!NOTE]
> Die angegebene Anzahl von Anfragen _schließt_ keine
> Wiederholungen ein. Wenn eine Anfrage aufgrund von Netzwerkproblemen wiederholt werden musste, wird sie hier mehrfach gezählt. Dies unterscheidet sich von
> [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived), das
> _tatsächlich_ Wiederholungen einschließt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
