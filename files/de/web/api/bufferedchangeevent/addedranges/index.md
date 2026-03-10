---
title: "BufferedChangeEvent: addedRanges-Eigenschaft"
short-title: addedRanges
slug: Web/API/BufferedChangeEvent/addedRanges
l10n:
  sourceCommit: 4be29f6917b698805c919c5d290359bc13c62384
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`addedRanges`**-Eigenschaft der [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent)-Schnittstelle gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche repräsentiert, die dem zugehörigen [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) hinzugefügt wurden. Diese Bereiche sind jene, die zwischen den letzten `updatestart`- und `updateend`-Ereignissen während des jüngsten Durchlaufs des verarbeiteten Frame-Algorithmus hinzugefügt wurden.

## Wert

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt.

## Beispiele

Ein Beispiel für die Verwendung von `addedRanges` finden Sie auf der Hauptseite von [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BufferedChangeEvent.removedRanges`](/de/docs/Web/API/BufferedChangeEvent/removedRanges)
- [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event) Ereignis
- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
- [`TimeRanges`](/de/docs/Web/API/TimeRanges)
