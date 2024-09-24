---
title: "RTCIceCandidatePairStats: Eigenschaft bytesSent"
short-title: bytesSent
slug: Web/API/RTCIceCandidatePairStats/bytesSent
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`bytesSent`** des {{domxref("RTCIceCandidatePairStats")}} gibt die Gesamtanzahl der Nutzdatenbytes an – das heißt, Bytes, die keinen Overhead wie Header oder Padding darstellen –, die bisher über die Verbindung gesendet wurden, die durch das Kandidatenpaar beschrieben wird.

Die Eigenschaft {{domxref("RTCIceCandidatePairStats.bytesReceived", "bytesReceived")}}
meldet die Anzahl der bisher empfangenen Bytes auf der beschriebenen Verbindung.

## Syntax

```js-nolint
sent = rtcIceCandidatePairStats.bytesSent
```

### Wert

Ein ganzzahliger Wert, der die Gesamtanzahl der bisher über die Verbindung gesendeten Bytes angibt, die durch dieses Kandidatenpaar beschrieben wird. Es werden nur Datenbytes gezählt; Overhead wie Padding, Header und Ähnliches werden in dieser Zählung nicht berücksichtigt.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
