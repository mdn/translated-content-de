---
title: "RTCRemoteOutboundRtpStreamStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCRemoteOutboundRtpStreamStats/timestamp
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die im Objekt enthaltenen Daten aufgezeichnet wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte auf wenige Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von {{Glossary("Fingerprinting", "Fingerprinting")}}-Schutz, in Form von reduzierter Taktgenauigkeit oder Taktpräzision, nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
