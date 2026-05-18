---
title: "RTCIceCandidatePairStats: requestsSent-Eigenschaft"
short-title: requestsSent
slug: Web/API/RTCIceCandidatePairStats/requestsSent
l10n:
  sourceCommit: 915810b5a95b032f76a47f14d8ade4fe92170c84
---

{{APIRef("WebRTC")}}

Die **`requestsSent`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Gesamtanzahl der {{Glossary("STUN", "STUN")}}-Konnektivitätsüberprüfungsanforderungen an, die bisher über die durch dieses Kandidatenpaar beschriebene Verbindung gesendet wurden.

## Wert

Ein ganzzahliger Wert, der die Anzahl der STUN-Konnektivitätsanfragen angibt, die bisher über die durch dieses Paar von {{Glossary("ICE", "ICE")}}-Kandidaten beschriebene Verbindung gesendet wurden.

> [!NOTE]
> Die gemeldete Anzahl der Anfragen _schließt_ keine erneuten Übertragungen ein.
> Wenn eine Anfrage aufgrund von Netzwerkproblemen wiederholt werden musste, wird sie hier nicht mehrfach gezählt.
> Dies unterscheidet sich von [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived), die _einschließlich_ der erneuten Übertragungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
