---
title: "TimeEvent: detail-Eigenschaft"
short-title: detail
slug: Web/API/TimeEvent/detail
l10n:
  sourceCommit: b57f79da1b90404fd0af82730cde8a0cdae51713
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`TimeEvent.detail`** liefert kontextuelle Informationen über das Ereignis, abhängig vom Ereignistyp.

Für `repeatEvent`-Ereignisse enthält `detail` die aktuelle Wiederholungsiteration als nicht-negative Ganzzahl. Da das Ereignis nicht für die erste Iteration ausgelöst wird, wird der Wert immer 1 oder größer sein.

Für `beginEvent`- und `endEvent`-Ereignisse ist `detail` immer `0`.

## Wert

Ein `long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TimeEvent`](/de/docs/Web/API/TimeEvent)
