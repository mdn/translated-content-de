---
title: "PerformanceElementTiming: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/PerformanceElementTiming/paintTime
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

Die **`paintTime`**-Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die Rendering-Phase endete und die Malphase begann.

Die `paintTime` ist weitgehend interoperabel: Der Wert sollte in verschiedenen Implementierungen gleich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Siehe [Beobachten von separaten Mal- und Präsentationszeiten](/de/docs/Web/API/PerformanceElementTiming#observing_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceElementTiming.presentationTime`](/de/docs/Web/API/PerformanceElementTiming/presentationTime)
