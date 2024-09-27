---
title: "RTCAudioSourceStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCAudioSourceStats/timestamp
l10n:
  sourceCommit: 33e054640393bb70c43b0ef92c3017f0aec6c05e
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) Dictionaries ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Daten im Objekt erfasst wurden.

Die Zeit wird in Millisekunden angegeben, die seit dem ersten Moment des 1. Januar 1970, UTC, vergangen sind (auch bekannt als [Unix-Zeit](/de/docs/Glossary/Unix_time)).

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der angibt, wann die durch die Statistiken in diesem Objekt beschriebenen Aktivitäten erfasst wurden, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte innerhalb weniger Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystembeschränkungen oder aufgrund von [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Schutz in Form von reduzierter Präzision oder Genauigkeit der Uhr nicht ganz präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
