---
title: "LargestContentfulPaint: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/LargestContentfulPaint/paintTime
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

Die **`paintTime`**-Eigenschaft, die nur lesbar ist, der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Schnittstelle gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die Renderphase endete und die Malphase begann.

Die `paintTime` ist weitgehend interoperabel: Der Wert sollte bei verschiedenen Implementierungen gleich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Siehe [Beobachten von separaten Mal- und Präsentationszeiten](/de/docs/Web/API/LargestContentfulPaint#observing_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LargestContentfulPaint.presentationTime`](/de/docs/Web/API/LargestContentfulPaint/presentationTime)
