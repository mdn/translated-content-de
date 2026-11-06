---
title: "PerformanceContainerTiming: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/PerformanceContainerTiming/paintTime
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`paintTime`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt einen Zeitstempel zurück, der angibt, wann die Rendering-Phase endete und die Paint-Phase begann.

Diese Eigenschaft ist eine browserübergreifend weitgehend vergleichbare Metrik für den Zeitpunkt des Paints und kann daher verwendet werden, um das Verhalten verschiedener Browser zu vergleichen.
Für Tests in einem einzelnen Browser können Sie stattdessen [`presentationTime`](/de/docs/Web/API/PerformanceContainerTiming/presentationTime) verwenden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Siehe [Beobachten, wie sich Einträge mit wachsendem Container ändern](/de/docs/Web/API/PerformanceContainerTiming#observing_how_entries_change_as_a_container_grows) unter [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming.presentationTime`](/de/docs/Web/API/PerformanceContainerTiming/presentationTime)
