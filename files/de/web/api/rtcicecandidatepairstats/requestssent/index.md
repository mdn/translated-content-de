---
title: "RTCIceCandidatePairStats: requestsSent-Eigenschaft"
short-title: requestsSent
slug: Web/API/RTCIceCandidatePairStats/requestsSent
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`requestsSent`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Gesamtzahl der {{Glossary("STUN", "STUN")}}-Verbindungsüberprüfungsanfragen an, die bisher auf der Verbindung gesendet wurden, die durch dieses Paar von Kandidaten beschrieben wird.

## Wert

Ein ganzzahliger Wert, der die Anzahl der STUN-Verbindungsanfragen angibt, die bisher auf der Verbindung gesendet wurden, die durch dieses Paar von {{Glossary("ICE", "ICE")}}-Kandidaten beschrieben wird.

> [!NOTE]
> Die gemeldete Anzahl der Anfragen _beinhaltet keine_ erneuten Übertragungen.
> Wenn eine Anfrage aufgrund von Netzwerkproblemen wiederholt werden musste, wird sie hier mehrfach gezählt.
> Dies unterscheidet sich von [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived), die _tatsächlich_ erneute Übertragungen einschließt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
