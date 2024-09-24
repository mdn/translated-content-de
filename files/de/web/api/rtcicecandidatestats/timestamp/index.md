---
title: "RTCIceCandidateStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCIceCandidateStats/timestamp
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des {{domxref("RTCIceCandidateStats")}}-Wörterbuchs ist ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das den Zeitpunkt angibt, zu dem die Daten in dem Objekt erfasst wurden.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Wert, der den Zeitpunkt angibt, zu dem die durch die Statistiken in diesem Objekt beschriebene Aktivität erfasst wurde, in Millisekunden seit dem 1. Januar 1970, UTC.

Der Wert sollte auf wenige Millisekunden genau sein, kann jedoch aus Hardware- oder Betriebssystembeschränkungen oder aufgrund von [Fingerabdruckschutz](/de/docs/Glossary/Fingerprinting) in Form von reduzierter Uhrenpräzision oder Genauigkeit ungenau sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
