---
title: "RTCIceCandidatePairStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCIceCandidatePairStats/timestamp
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Daten in dem Objekt erfasst wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden, die seit Beginn des 1. Januar 1970, UTC, verstrichen sind.

Der Wert sollte innerhalb weniger Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von Schutzmaßnahmen gegen [Fingerabdrücke](/de/docs/Glossary/Fingerprinting), die in Form von verringerter Präzision oder Genauigkeit der Uhr implementiert sind, nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
