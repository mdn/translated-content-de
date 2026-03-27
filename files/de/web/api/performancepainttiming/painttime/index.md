---
title: "PerformancePaintTiming: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/PerformancePaintTiming/paintTime
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`paintTime`**-Eigenschaft des [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Interfaces gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die Renderphase endete und die Malphase begann.

Die `paintTime` ist weitgehend interoperabel: Der Wert sollte in verschiedenen Implementierungen gleich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Siehe [Separate Mal- und Präsentationszeiten erhalten](/de/docs/Web/API/PerformancePaintTiming#getting_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformancePaintTiming.presentationTime`](/de/docs/Web/API/PerformancePaintTiming/presentationTime)
