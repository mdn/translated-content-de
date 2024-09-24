---
title: "RTCIceCandidateStats: Eigenschaft localCandidateId"
short-title: localCandidateId
slug: Web/API/RTCIceCandidatePairStats/localCandidateId
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`localCandidateId`** des Objekts {{domxref("RTCIceCandidatePairStats")}} ist ein String, der den lokalen {{Glossary("ICE")}}-Kandidaten eindeutig identifiziert, der analysiert wurde, um die {{domxref("RTCIceCandidateStats")}} zu erstellen, die für die Berechnung der Statistiken für dieses Kandidatenpaar verwendet wurden.

## Wert

Ein String, der einen eindeutigen Identifikator für den lokalen {{domxref("RTCIceCandidate")}} für die Verbindung angibt, die durch dieses `RTCIceCandidatePairStats`-Objekt beschrieben wird.

Dieser Kandidat ist die Quelle eines der beiden {{domxref("RTCIceCandidateStats")}}-Objekte, die verwendet wurden, um den Inhalt dieses {{domxref("RTCIceCandidatePairStats")}}-Objekts zu berechnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
