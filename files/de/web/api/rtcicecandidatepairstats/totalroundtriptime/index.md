---
title: "RTCIceCandidatePairStats: Eigenschaft totalRoundTripTime"
short-title: totalRoundTripTime
slug: Web/API/RTCIceCandidatePairStats/totalRoundTripTime
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`totalRoundTripTime`**-Eigenschaft des {{domxref("RTCIceCandidatePairStats")}}-Dictionaries ist die gesamte Zeit, die zwischen dem Senden von {{Glossary("STUN")}}-Anfragen und dem Empfangen der Antworten vergangen ist, für alle derartigen Anfragen, die bisher für das von diesem `RTCIceCandidatePairStats`-Objekt beschriebene Kandidatenpaar gemacht wurden. Dieser Wert schließt sowohl Konnektivitäts- als auch Einwilligungsprüfungsanfragen ein.

## Wert

Dieser Gleitkommawert gibt die Gesamtanzahl der Sekunden an, die zwischen dem Senden von STUN-Konnektivitäts- und Einwilligungsprüfungsanfragen und dem Empfangen ihrer Antworten vergangen sind, für alle derartigen Anfragen, die bisher für die in diesem Kandidatenpaar beschriebene Verbindung gemacht wurden.

Sie können die durchschnittliche Round-Trip-Time (RTT) berechnen, indem Sie diesen Wert durch den Wert der {{domxref("RTCIceCandidatePairStats.responsesReceived", "responsesReceived")}}-Eigenschaft teilen:

```js
rtt =
  rtcIceCandidatePairStats.totalRoundTripTime /
  rtcIceCandidatePairStats.responsesReceived;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
