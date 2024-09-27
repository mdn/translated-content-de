---
title: "RTCTransportStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCTransportStats/timestamp
l10n:
  sourceCommit: be0fee87cb391fb077053fc7ca7640b7e51d1da8
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Daten in dem Objekt erfasst wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der den Zeitpunkt angibt, zu dem die Aktivität, die durch die Statistik in diesem Objekt beschrieben wird, aufgezeichnet wurde, in Millisekunden, die seit Beginn des 1. Januar 1970, UTC, verstrichen sind.

Der Wert sollte innerhalb weniger Millisekunden genau sein, kann aber aufgrund von Hardware- oder Betriebssystembeschränkungen oder aufgrund von [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Schutz in Form von reduzierter Taktgenauigkeit oder -präzision nicht völlig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
