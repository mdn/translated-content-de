---
title: "PerformanceElementTiming: Eigenschaft presentationTime"
short-title: presentationTime
slug: Web/API/PerformanceElementTiming/presentationTime
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`presentationTime`** des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem das Element tatsächlich auf dem Bildschirm angezeigt wurde.

Die `presentationTime` ist optional – einige Browser können immer `0` zurückgeben oder den Wert überhaupt nicht bereitstellen. Der Wert hängt auch von der Implementierung ab – er kann sich zwischen Browsern unterscheiden, die ihn bereitstellen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("Operators/null", "null")}}, wenn der Wert nicht verfügbar ist.

## Beispiele

Siehe [Beobachtung separater Mal- und Darstellungstiming](/de/docs/Web/API/PerformanceElementTiming#observing_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceElementTiming.paintTime`](/de/docs/Web/API/PerformanceElementTiming/paintTime)
