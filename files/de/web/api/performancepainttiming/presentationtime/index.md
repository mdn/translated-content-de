---
title: "PerformancePaintTiming: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/PerformancePaintTiming/presentationTime
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{APIRef("Performance API")}}

Die **`presentationTime`**-Eigenschaft der [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Schnittstelle gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gerenderten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Die `presentationTime` ist optional – einige Browser können sich dafür entscheiden, immer `0` zurückzugeben oder den Wert überhaupt nicht offenzulegen. Der Wert ist auch implementierungsabhängig – er kann zwischen Browsern variieren, die sich dafür entscheiden, ihn offenzulegen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("null")}}, falls der Wert nicht offengelegt wird.

## Beispiele

Siehe [Separate Render- und Präsentationszeiten erhalten](/de/docs/Web/API/PerformancePaintTiming#getting_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformancePaintTiming.paintTime`](/de/docs/Web/API/PerformancePaintTiming/paintTime)
