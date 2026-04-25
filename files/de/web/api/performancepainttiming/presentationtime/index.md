---
title: "PerformancePaintTiming: Eigenschaft presentationTime"
short-title: presentationTime
slug: Web/API/PerformancePaintTiming/presentationTime
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`presentationTime`** des [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Interfaces gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gezeichneten Pixel tatsächlich auf dem Bildschirm angezeigt wurden.

Die `presentationTime` ist optional — einige Browser können immer `0` zurückgeben oder den Wert überhaupt nicht preisgeben. Der Wert ist auch implementierungsabhängig — er kann in Browsern, die sich entscheiden, ihn preiszugeben, unterschiedlich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("Operators/null", "null")}}, falls der Wert nicht verfügbar gemacht wird.

## Beispiele

Siehe [Separate Zeitangaben für Paint und Präsentation erhalten](/de/docs/Web/API/PerformancePaintTiming#getting_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformancePaintTiming.paintTime`](/de/docs/Web/API/PerformancePaintTiming/paintTime)
