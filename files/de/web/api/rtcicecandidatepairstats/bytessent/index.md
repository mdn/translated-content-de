---
title: "RTCIceCandidatePairStats: bytesSent-Eigenschaft"
short-title: bytesSent
slug: Web/API/RTCIceCandidatePairStats/bytesSent
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Eigenschaft **`bytesSent`** gibt die Gesamtanzahl an Nutzlast-Bytes an – also Bytes, die keine Overhead-Elemente wie Header oder Padding enthalten –, die bisher über die durch das Kandidatenpaar beschriebene Verbindung gesendet wurden.

Die [`bytesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/bytesReceived)-Eigenschaft meldet die Anzahl der Bytes, die bisher über die beschriebene Verbindung empfangen wurden.

## Syntax

```js-nolint
sent = rtcIceCandidatePairStats.bytesSent
```

### Wert

Ein ganzzahliger Wert, der die Gesamtanzahl der Bytes angibt, die bisher über die durch dieses Kandidatenpaar beschriebene Verbindung gesendet wurden. Es werden nur Datenbytes gezählt; Overhead wie Padding, Header und Ähnliches sind in dieser Zählung nicht enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
