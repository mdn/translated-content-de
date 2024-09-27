---
title: "RTCRemoteOutboundRtpStreamStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCRemoteOutboundRtpStreamStats/timestamp
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Daten im Objekt entnommen wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der den Zeitpunkt angibt, zu dem die Aktivität, die durch die Statistiken in diesem Objekt beschrieben wird, aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte mit einer Genauigkeit von wenigen Millisekunden angegeben werden, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder durch Schutzmaßnahmen gegen [Fingerprinting](/de/docs/Glossary/Fingerprinting) in Form von reduzierter Taktgenauigkeit oder -präzision nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
