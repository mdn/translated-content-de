---
title: "RTCIceCandidateStats: Eigenschaft localCandidateId"
short-title: localCandidateId
slug: Web/API/RTCIceCandidatePairStats/localCandidateId
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Eigenschaft **`localCandidateId`** ist eine Zeichenkette, die den lokalen [ICE](/de/docs/Glossary/ICE)-Kandidaten eindeutig identifiziert, der analysiert wurde, um die [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) zu erzeugen, die zur Berechnung der Statistiken für dieses Kandidatenpaar verwendet wurden.

## Wert

Eine Zeichenkette, die eine eindeutige Kennung für den lokalen [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) für die Verbindung angibt, die durch dieses `RTCIceCandidatePairStats`-Objekt beschrieben wird.

Dieser Kandidat ist die Quelle eines der beiden [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Objekte, die verwendet wurden, um den Inhalt dieses [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Objekts zu berechnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
