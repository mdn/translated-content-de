---
title: "RTCIceCandidateStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCIceCandidateStats/timestamp
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Daten im Objekt erfasst wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte bis auf einige Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystembeschränkungen oder aufgrund von [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Schutz in Form von reduzierter Taktgenauigkeit oder -präzision ungenau sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
