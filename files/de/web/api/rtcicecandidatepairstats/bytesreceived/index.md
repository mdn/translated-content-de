---
title: "RTCIceCandidatePairStats: Eigenschaft bytesReceived"
short-title: bytesReceived
slug: Web/API/RTCIceCandidatePairStats/bytesReceived
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`bytesReceived`** von {{domxref("RTCIceCandidatePairStats")}} gibt die Gesamtanzahl der Nutzlast-Bytes an—das sind Bytes, die keinen Overhead wie Header oder Padding darstellen—, die bisher über die Verbindung empfangen wurden, die durch das Kandidatenpaar beschrieben wird.

Die Eigenschaft {{domxref("RTCIceCandidatePairStats.bytesSent", "bytesSent")}} berichtet über die Anzahl der bisher auf der beschriebenen Verbindung gesendeten Bytes.

## Wert

Ein ganzzahliger Wert, der die Gesamtanzahl der bisher über die durch dieses Kandidatenpaar beschriebene Verbindung empfangenen Bytes anzeigt. Es werden nur Datenbytes gezählt; Overhead wie Padding, Header und dergleichen sind in dieser Zählung nicht enthalten.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
