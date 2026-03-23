---
title: "BufferedChangeEvent: addedRanges-Eigenschaft"
short-title: addedRanges
slug: Web/API/BufferedChangeEvent/addedRanges
l10n:
  sourceCommit: aea2d29336c910940abb1f8e71e02158ac51e7c4
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Die **`addedRanges`** schreibgeschützte Eigenschaft des [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent)-Interfaces gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitspannen repräsentiert, die dem zugehörigen [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) hinzugefügt wurden. Dies sind die Bereiche, die zwischen den letzten `updatestart`- und `updateend`-Ereignissen während der jüngsten Ausführung des codierten Rahmenverarbeitungsalgorithmus hinzugefügt wurden.

## Wert

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt.

## Beispiele

Sehen Sie sich die Hauptseite von [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent) für ein Beispiel an, das die Verwendung von `addedRanges` zeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BufferedChangeEvent.removedRanges`](/de/docs/Web/API/BufferedChangeEvent/removedRanges)
- [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event) Ereignis
- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
- [`TimeRanges`](/de/docs/Web/API/TimeRanges)
