---
title: "PerformanceContainerTiming: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/PerformanceContainerTiming/paintTime
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`paintTime`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt einen Zeitstempel zurück, der angibt, wann die Rendering-Phase endete und die Paint-Phase begann.

Diese Eigenschaft ist eine weitgehend browserübergreifend vergleichbare Metrik zur Bestimmung des Zeitpunkts des Paints. Sie kann daher verwendet werden, um das Verhalten verschiedener Browser zu vergleichen.
Für Tests in einem einzelnen Browser können Sie stattdessen [`presentationTime`](/de/docs/Web/API/PerformanceContainerTiming/presentationTime) verwenden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Siehe [Beobachten, wie sich Einträge verändern, wenn ein Container wächst](/de/docs/Web/API/PerformanceContainerTiming#observing_how_entries_change_as_a_container_grows) unter [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming.presentationTime`](/de/docs/Web/API/PerformanceContainerTiming/presentationTime)
