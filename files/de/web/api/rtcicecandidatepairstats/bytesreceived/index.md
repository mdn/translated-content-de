---
title: "RTCIceCandidatePairStats: bytesReceived-Eigenschaft"
short-title: bytesReceived
slug: Web/API/RTCIceCandidatePairStats/bytesReceived
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Eigenschaft **`bytesReceived`** gibt die Gesamtanzahl der Nutzlast-Bytes an, das heißt, Bytes, die keinen Overhead wie Header oder Padding darstellen, die bis dato über die Verbindung, die von dem Kandidatenpaar beschrieben wird, empfangen wurden.

Die [`bytesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesSent)-Eigenschaft gibt die Anzahl der bisher über die beschriebene Verbindung gesendeten Bytes an.

## Wert

Ein ganzzahliger Wert, der die Gesamtanzahl der bisher über die von diesem Kandidatenpaar beschriebene Verbindung empfangenen Bytes angibt. Es werden nur Nutzdaten-Bytes gezählt; Overhead wie Padding, Header und Ähnliches sind in dieser Zählung nicht enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
