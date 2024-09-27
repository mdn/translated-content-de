---
title: "RTCIceCandidatePairStats: bytesSent-Eigenschaft"
short-title: bytesSent
slug: Web/API/RTCIceCandidatePairStats/bytesSent
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`bytesSent`** von [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) gibt die Gesamtzahl der Nutzlast-Bytes an—also Bytes, die nicht als Overhead wie Header oder Padding zählen—, die bisher über die Verbindung des Kandidatenpaares gesendet wurden.

Die Eigenschaft [`bytesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesReceived) gibt die Anzahl der Bytes an, die bisher über die beschriebene Verbindung empfangen wurden.

## Syntax

```js-nolint
sent = rtcIceCandidatePairStats.bytesSent
```

### Wert

Ein ganzzahliger Wert, der die Gesamtzahl der bisher über die in diesem Kandidatenpaar beschriebene Verbindung gesendeten Bytes angibt. Es werden nur Datenbytes gezählt; Overhead wie Padding, Header und Ähnliches sind in dieser Zählung nicht enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
