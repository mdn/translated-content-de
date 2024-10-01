---
title: "RTCIceCandidatePairStats: responsesSent Eigenschaft"
short-title: responsesSent
slug: Web/API/RTCIceCandidatePairStats/responsesSent
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die **`responsesSent`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Gesamtzahl der {{Glossary("STUN", "STUN")}}-Verbindungstestantworten an, die bisher auf der Verbindung gesendet wurden, die von diesem Kandidatenpaar beschrieben wird.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Male angibt, die eine Antwort auf eine {{Glossary("STUN", "STUN")}}-Verbindungstestanforderung gesendet wurde.

> [!NOTE]
> Da es nicht möglich ist, zwischen Verbindungstestanforderungen und Zustimmungsgesuchen zu unterscheiden, umfasst dieser Wert beide.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
