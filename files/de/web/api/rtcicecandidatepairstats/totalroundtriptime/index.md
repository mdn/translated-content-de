---
title: "RTCIceCandidatePairStats: totalRoundTripTime-Eigenschaft"
short-title: totalRoundTripTime
slug: Web/API/RTCIceCandidatePairStats/totalRoundTripTime
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`totalRoundTripTime`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs ist die Gesamtzeit, die vergangen ist zwischen dem Senden von [STUN](/de/docs/Glossary/STUN)-Anfragen und dem Empfang der Antworten, für alle derartigen Anfragen, die bisher bei dem von diesem `RTCIceCandidatePairStats`-Objekt beschriebenen Kandidatenpaar getätigt wurden. Dieser Wert umfasst sowohl Verbindlichkeitsprüfungen als auch Zustimmungsprüfungen.

## Wert

Dieser Fließkommawert gibt die gesamte Anzahl an Sekunden an, die vergangen sind, zwischen dem Senden von STUN-Verbindlichkeits- und Zustimmungsprüfungsanfragen und dem Empfang ihrer Antworten, für alle derartigen Anfragen, die bisher auf der Verbindung des beschriebenen Kandidatenpaars getätigt wurden.

Sie können die durchschnittliche Rundlaufzeit (RTT) berechnen, indem Sie diesen Wert durch den Wert der [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived)-Eigenschaft teilen:

```js
rtt =
  rtcIceCandidatePairStats.totalRoundTripTime /
  rtcIceCandidatePairStats.responsesReceived;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
