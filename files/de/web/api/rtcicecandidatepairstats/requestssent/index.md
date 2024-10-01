---
title: "RTCIceCandidatePairStats: requestsSent-Eigenschaft"
short-title: requestsSent
slug: Web/API/RTCIceCandidatePairStats/requestsSent
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die **`requestsSent`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Wörterbuchs gibt die Gesamtzahl der bisher gesendeten {{Glossary("STUN", "STUN")}}-Konnektivitätsanforderungen an, die über die durch dieses Kandidatenpaar beschriebene Verbindung gesendet wurden.

## Wert

Ein ganzzahliger Wert, der die Anzahl der bisher gesendeten STUN-Konnektivitätsanforderungen über die durch dieses Paar von {{Glossary("ICE", "ICE")}}-Kandidaten beschriebene Verbindung spezifiziert.

> [!NOTE]
> Die gemeldete Anzahl von Anfragen _schließt_ keine
> erneuten Übertragungen ein. Wenn eine Anfrage aufgrund von Netzwerkproblemen wiederholt werden musste, wird sie hier mehrfach gezählt. Dies unterscheidet sich von
> [`requestsReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/requestsReceived), das
> _sehr wohl_ erneuten Übertragungen einschließt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
