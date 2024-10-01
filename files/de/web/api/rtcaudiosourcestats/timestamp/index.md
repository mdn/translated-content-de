---
title: "RTCAudioSourceStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCAudioSourceStats/timestamp
l10n:
  sourceCommit: 33e054640393bb70c43b0ef92c3017f0aec6c05e
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Daten in dem Objekt abgenommen wurden.

Die Zeit wird in Millisekunden seit dem ersten Moment des 1. Januar 1970 UTC angegeben (auch bekannt als {{Glossary("Unix_time", "Unix-Zeit")}}).

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der den Zeitpunkt angibt, zu dem die Aktivität, die durch die Statistiken in diesem Objekt beschrieben wird, aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970 UTC.

Der Wert sollte innerhalb weniger Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystembeschränkungen oder aufgrund des Schutzes vor {{Glossary("Fingerprinting", "Fingerprinting")}} in Form von verringerter Takt-Genauigkeit oder -Präzision möglicherweise nicht völlig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
