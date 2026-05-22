---
title: "PerformanceElementTiming: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/PerformanceElementTiming/presentationTime
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`presentationTime`**-Schreibgeschützte Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann das Element tatsächlich auf dem Bildschirm gezeichnet wurde.

Die `presentationTime` ist optional - einige Browser können immer `0` zurückgeben oder den Wert gar nicht offenlegen. Der Wert ist auch implementationsabhängig - er kann sich zwischen Browsern unterscheiden, die sich dazu entscheiden, ihn offen zu legen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("null")}}, wenn der Wert nicht offengelegt wird.

## Beispiele

Siehe [Beobachtung von getrennten Mal- und Darstellungstiming](/de/docs/Web/API/PerformanceElementTiming#observing_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceElementTiming.paintTime`](/de/docs/Web/API/PerformanceElementTiming/paintTime)
