---
title: "RTCIceCandidatePairStats: totalRoundTripTime-Eigenschaft"
short-title: totalRoundTripTime
slug: Web/API/RTCIceCandidatePairStats/totalRoundTripTime
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`totalRoundTripTime`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs zeigt die gesamte Zeit an, die zwischen dem Senden von {{Glossary("STUN", "STUN")}}-Anfragen und dem Empfang der Antworten für alle derartigen Anfragen, die bisher auf dem durch dieses `RTCIceCandidatePairStats`-Objekt beschriebenen Kandidatenpaar gemacht wurden, vergangen ist.

Dieser Wert umfasst sowohl Anfragen zur Verbindungsprüfung als auch zur Zustimmungsprüfung.

## Wert

Diese reelle Zahl gibt die Gesamtanzahl der Sekunden an, die seit dem Versenden von STUN-Verbindungs- und Zustimmungsprüfungsanfragen sowie dem Empfang ihrer Antworten vergangen sind, für alle derartigen Anfragen, die bisher auf der durch dieses Kandidatenpaar beschriebenen Verbindung gemacht wurden.

Sie können die durchschnittliche Round-Trip-Zeit (RTT) berechnen, indem Sie diesen Wert durch den Wert der [`responsesReceived`](/de/docs/Web/API/RTCIceCandidatePairStats/responsesReceived)-Eigenschaft teilen:

```js
rtt =
  rtcIceCandidatePairStats.totalRoundTripTime /
  rtcIceCandidatePairStats.responsesReceived;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
