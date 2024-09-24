---
title: "RTCIceCandidatePairStats: Eigenschaft requestsSent"
short-title: requestsSent
slug: Web/API/RTCIceCandidatePairStats/requestsSent
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die **`requestsSent`** Eigenschaft des {{domxref("RTCIceCandidatePairStats")}} Wörterbuchs gibt die Gesamtanzahl der {{Glossary("STUN")}} Konnektivitätsprüfanfragen an, die bisher über die Verbindung gesendet wurden, die durch dieses Paar von Kandidaten beschrieben wird.

## Wert

Ein ganzzahliger Wert, der die Anzahl der STUN-Konnektivitätsanfragen angibt, die bis heute über die Verbindung gesendet wurden, die von diesem Paar von {{Glossary("ICE")}}-Kandidaten beschrieben wird.

> [!NOTE]
> Die gemeldete Anzahl von Anfragen _schließt_ keine
> Neusendungen ein. Wenn eine Anfrage aufgrund von Netzwerkproblemen wiederholt werden musste, wird sie hier mehrfach gezählt. Dies unterscheidet sich von
> {{domxref("RTCIceCandidatePairStats.requestsReceived", "requestsReceived")}}, das _doch_ Neusendungen einschließt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
