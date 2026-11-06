---
title: "PerformanceContainerTiming: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/PerformanceContainerTiming/presentationTime
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`presentationTime`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem der neu gerenderte Inhalt des Containers tatsächlich auf dem Bildschirm angezeigt wurde.

Der Wert von `presentationTime` kann `null` sein: Wie der zugrunde liegende Zeitstempel ermittelt wird, hängt von der Implementierung ab. Browser, die ihn nicht bereitstellen, geben daher stattdessen `null` zurück.
Da [`PerformanceContainerTiming.paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime) in allen Implementierungen auf die gleiche Weise bereitgestellt wird, ist diese Eigenschaft für Metriken, die browserübergreifend vergleichbar sein müssen, zuverlässiger.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("null")}}, wenn der Wert nicht verfügbar ist.

## Beispiele

Siehe [Beobachten, wie sich Einträge verändern, wenn ein Container wächst](/de/docs/Web/API/PerformanceContainerTiming#observing_how_entries_change_as_a_container_grows).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming.paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime)
