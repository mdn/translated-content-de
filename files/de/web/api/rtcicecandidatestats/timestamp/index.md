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

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der den Zeitpunkt angibt, zu dem die von den Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden, die seit dem Beginn des 1. Januar 1970, UTC, vergangen sind.

Der Wert sollte bis auf wenige Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystembeschränkungen oder wegen des Schutzes vor [Fingerprinting](/de/docs/Glossary/Fingerprinting) in Form reduzierter Taktsignalpräzision oder -genauigkeit nicht völlig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
