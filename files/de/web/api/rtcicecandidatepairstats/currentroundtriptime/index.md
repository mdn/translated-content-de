---
title: "RTCIceCandidatePairStats: currentRoundTripTime-Eigenschaft"
short-title: currentRoundTripTime
slug: Web/API/RTCIceCandidatePairStats/currentRoundTripTime
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Eigenschaft **`currentRoundTripTime`** ist ein Fließkommawert, der die Anzahl der Sekunden angibt, die es dauert, bis Daten von diesem Peer zum entfernten Peer und zurück über die Verbindung gesendet werden, die durch dieses Paar von [ICE](/de/docs/Glossary/ICE)-Kandidaten beschrieben wird.

## Syntax

```js-nolint
rtt = rtcIceCandidatePairStats.currentRoundTripTime
```

### Wert

Ein Fließkommawert, der die Rundlaufzeit in Sekunden für die Verbindung angibt, die durch das Paar von Kandidaten beschrieben wird, für das dieses `RTCIceCandidatePairStats`-Objekt Statistiken liefert.

Dieser Wert wird berechnet, indem die Zeit beobachtet wird, die zwischen dem Senden der letzten [STUN](/de/docs/Glossary/STUN)-Anfrage an den entfernten Peer und dem Eintreffen der Antwort auf diese Anfrage vergangen ist. Diese Informationen können sowohl aus laufenden STUN-Konnektivitätschecks als auch aus Zustimmungserklärungen stammen, die bei der anfänglichen Verbindungsherstellung gemacht wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
