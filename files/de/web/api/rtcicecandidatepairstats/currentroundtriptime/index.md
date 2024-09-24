---
title: "RTCIceCandidatePairStats: currentRoundTripTime-Eigenschaft"
short-title: currentRoundTripTime
slug: Web/API/RTCIceCandidatePairStats/currentRoundTripTime
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`currentRoundTripTime`** des {{domxref("RTCIceCandidatePairStats")}} ist ein Gleitkommawert, der die Anzahl der Sekunden angibt, die es dauert, bis Daten von diesem Peer zum entfernten Peer gesendet und über die Verbindung, die durch dieses Paar von {{Glossary("ICE")}}-Kandidaten beschrieben wird, zurückgesendet werden.

## Syntax

```js-nolint
rtt = rtcIceCandidatePairStats.currentRoundTripTime
```

### Wert

Ein Gleitkommawert, der die Round-Trip-Zeit in Sekunden für die Verbindung angibt, die durch das Paar von Kandidaten beschrieben wird, für das dieses `RTCIceCandidatePairStats`-Objekt Statistiken bietet.

Dieser Wert wird ermittelt, indem die Zeit beobachtet wird, die zwischen dem Versand der letzten {{Glossary("STUN")}}-Anfrage an den entfernten Peer und dem Eintreffen der Antwort auf diese Anfrage vergangen ist. Diese Information kann sowohl von laufenden STUN-Verbindungsprüfungen als auch von Zustimmungsgesuchen stammen, die beim anfänglichen Öffnen der Verbindung gemacht wurden.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
