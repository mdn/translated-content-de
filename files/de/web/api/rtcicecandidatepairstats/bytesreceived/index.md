---
title: "RTCIceCandidatePairStats: Eigenschaft bytesReceived"
short-title: bytesReceived
slug: Web/API/RTCIceCandidatePairStats/bytesReceived
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Eigenschaft
**`bytesReceived`** gibt die Gesamtanzahl der Nutzdaten-Bytes an - das heißt, Bytes, die kein Overhead wie Header oder Auffüllung sind -, die bis dato über die Verbindung des Kandidatenpaares empfangen wurden.

Die [`bytesSent`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesSent) Eigenschaft berichtet die Anzahl der bisher über die beschriebene Verbindung gesendeten Bytes.

## Wert

Ein ganzzahliger Wert, der die Gesamtanzahl der bisher auf der durch dieses Kandidatenpaar beschriebenen Verbindung empfangenen Bytes angibt. Es werden nur Nutzdaten-Bytes gezählt; Overhead wie Auffüllungen, Header und Ähnliches sind in dieser Zählung nicht enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
