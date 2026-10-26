---
title: "PerformanceElementTiming: Eigenschaft presentationTime"
short-title: presentationTime
slug: Web/API/PerformanceElementTiming/presentationTime
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`presentationTime`** der Schnittstelle [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem das Element tatsächlich auf dem Bildschirm dargestellt wurde.

Der Wert von `presentationTime` kann `null` sein: Der zugrunde liegende Zeitstempel ist implementierungsabhängig. Browser, die ihn nicht bereitstellen, geben daher stattdessen `null` zurück.
Da [`PerformanceElementTiming.paintTime`](/de/docs/Web/API/PerformanceElementTiming/paintTime) in allen Implementierungen auf dieselbe Weise bereitgestellt wird, ist dieser Wert für Metriken, die browserübergreifend vergleichbar sein müssen, zuverlässiger.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("null")}}, wenn der Wert nicht bereitgestellt wird.

## Beispiele

Siehe [Getrennte Paint- und Präsentationszeitpunkte beobachten](/de/docs/Web/API/PerformanceElementTiming#observing_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceElementTiming.paintTime`](/de/docs/Web/API/PerformanceElementTiming/paintTime)
