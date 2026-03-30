---
title: "PerformanceElementTiming: Eigenschaft presentationTime"
short-title: presentationTime
slug: Web/API/PerformanceElementTiming/presentationTime
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`presentationTime`**-Eigenschaft der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle gibt einen schreibgeschützten [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann das Element tatsächlich auf dem Bildschirm gezeichnet wurde.

Die `presentationTime` ist optional — einige Browser können immer `0` zurückgeben oder den Wert überhaupt nicht anzeigen. Der Wert ist auch implementierungsabhängig — er kann zwischen Browsern, die sich dafür entscheiden, ihn anzuzeigen, unterschiedlich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("Operators/null", "null")}}, wenn der Wert nicht angezeigt wird.

## Beispiele

Siehe [Beobachtung von getrennten Paint- und Presentation-Timings](/de/docs/Web/API/PerformanceElementTiming#observing_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceElementTiming.paintTime`](/de/docs/Web/API/PerformanceElementTiming/paintTime)
