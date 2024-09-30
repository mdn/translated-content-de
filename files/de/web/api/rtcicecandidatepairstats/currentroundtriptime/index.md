---
title: "RTCIceCandidatePairStats: currentRoundTripTime-Eigenschaft"
short-title: currentRoundTripTime
slug: Web/API/RTCIceCandidatePairStats/currentRoundTripTime
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) -Eigenschaft **`currentRoundTripTime`** ist ein Gleitkommawert, der die Anzahl von Sekunden angibt, die es dauert, bis Daten von diesem Peer zum entfernten Peer und zurück über die Verbindung, die durch dieses Paar von [ICE](/de/docs/Glossary/ICE)-Kandidaten beschrieben wird, gesendet werden.

## Syntax

```js-nolint
rtt = rtcIceCandidatePairStats.currentRoundTripTime
```

### Wert

Ein Gleitkommawert, der die Rundlaufzeit in Sekunden für die Verbindung angibt, die durch das Paar von Kandidaten beschrieben wird, für das dieses `RTCIceCandidatePairStats`-Objekt Statistiken bietet.

Dieser Wert wird ermittelt, indem die Zeit beobachtet wird, die zwischen dem Senden der neuesten [STUN](/de/docs/Glossary/STUN)-Anfrage an den entfernten Peer und dem Eintreffen der Antwort auf diese Anfrage vergeht. Diese Informationen können sowohl von laufenden STUN-Konnektivitätsprüfungen als auch von Zustimmungsgesuchen stammen, die bei der anfänglichen Eröffnung der Verbindung gestellt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
