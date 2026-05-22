---
title: "LargestContentfulPaint: Eigenschaft presentationTime"
short-title: presentationTime
slug: Web/API/LargestContentfulPaint/presentationTime
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`presentationTime`** des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interfaces gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die angezeigten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Die `presentationTime` ist optional — einige Browser könnten immer `0` zurückgeben oder den Wert überhaupt nicht offenlegen. Der Wert ist auch von der Implementierung abhängig — er kann sich zwischen Browsern unterscheiden, die sich entscheiden, ihn offenzulegen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("null")}}, wenn der Wert nicht offengelegt wird.

## Beispiele

Sehen Sie [Beobachtung separater Paint- und Präsentationstiming](/de/docs/Web/API/LargestContentfulPaint#observing_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LargestContentfulPaint.paintTime`](/de/docs/Web/API/LargestContentfulPaint/paintTime)
