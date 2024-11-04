---
title: "RTCIceCandidateStats: Eigenschaft localCandidateId"
short-title: localCandidateId
slug: Web/API/RTCIceCandidatePairStats/localCandidateId
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`localCandidateId`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs ist ein String, der den lokalen {{Glossary("ICE", "ICE")}}-Kandidaten eindeutig identifiziert, der analysiert wurde, um die [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) zu erzeugen, die verwendet wurden, um die Statistiken für dieses Paar von Kandidaten zu berechnen.

## Wert

Ein String, der eine eindeutige Kennung für den lokalen [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) für die Verbindung angibt, die durch dieses `RTCIceCandidatePairStats`-Objekt beschrieben wird.

Dieser Kandidat ist die Quelle eines der beiden [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Objekte, die verwendet wurden, um den Inhalt dieses [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Objekts zu berechnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
