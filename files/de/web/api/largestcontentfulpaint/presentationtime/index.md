---
title: "LargestContentfulPaint: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/LargestContentfulPaint/presentationTime
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

Die **`presentationTime`**-Eigenschaft des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interfaces gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gerenderten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Die `presentationTime` ist optional — einige Browser können wählen, immer `0` zurückzugeben oder den Wert überhaupt nicht offenzulegen. Der Wert ist auch implementierungsabhängig — er kann in Browsern, die sich entscheiden, ihn offenzulegen, unterschiedlich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("Operators/null", "null")}}, wenn der Wert nicht offengelegt wird.

## Beispiele

Siehe [Beobachtung separater Mal- und Darstellungstiming](/de/docs/Web/API/LargestContentfulPaint#observing_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LargestContentfulPaint.paintTime`](/de/docs/Web/API/LargestContentfulPaint/paintTime)
