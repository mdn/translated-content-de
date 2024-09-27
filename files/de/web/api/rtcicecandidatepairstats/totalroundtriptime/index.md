---
title: "RTCIceCandidatePairStats: totalRoundTripTime-Eigenschaft"
short-title: totalRoundTripTime
slug: Web/API/RTCIceCandidatePairStats/totalRoundTripTime
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`totalRoundTripTime`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Objekts ist die Gesamtzeit, die von dem Senden von [STUN](/de/docs/Glossary/STUN)-Anfragen bis zum Empfangen der Antworten vergangen ist. Dies gilt für alle solche Anfragen, die bisher für das von diesem `RTCIceCandidatePairStats`-Objekt beschriebene Kandidatenpaar gemacht wurden. Dieser Wert umfasst sowohl die Konnektivitäts- als auch die Zustimmungstest-Anfragen.

## Wert

Dieser Gleitkommawert gibt die gesamte Anzahl der Sekunden an, die zwischen dem Versenden von STUN-Konnektivitäts- und Zustimmungstest-Anfragen und dem Erhalt ihrer Antworten vergangen sind, für alle bis dahin auf der beschriebenen Verbindung durchgeführten Anfragen zu diesem Kandidatenpaar.

Sie können die durchschnittliche Round-Trip-Time (RTT) berechnen, indem Sie diesen Wert durch den Wert der [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived)-Eigenschaft teilen:

```js
rtt =
  rtcIceCandidatePairStats.totalRoundTripTime /
  rtcIceCandidatePairStats.responsesReceived;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
