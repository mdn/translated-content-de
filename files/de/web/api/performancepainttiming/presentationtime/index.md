---
title: "PerformancePaintTiming: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/PerformancePaintTiming/presentationTime
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`presentationTime`** der Schnittstelle [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming) gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gerenderten Pixel tatsächlich auf dem Bildschirm angezeigt wurden.

Der Wert von `presentationTime` kann `null` sein: Der zugrunde liegende Zeitstempel ist implementierungsabhängig. Browser, die ihn nicht bereitstellen, geben daher `null` zurück.
Da [`PerformancePaintTiming.paintTime`](/de/docs/Web/API/PerformancePaintTiming/paintTime) in allen Implementierungen auf dieselbe Weise bereitgestellt wird, ist dies der zuverlässigere Wert für Metriken, die browserübergreifend vergleichbar sein müssen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("null")}}, wenn der Wert nicht offengelegt wird.

## Beispiele

Siehe [Separate Zeitangaben für Paint und Anzeige abrufen](/de/docs/Web/API/PerformancePaintTiming#getting_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformancePaintTiming.paintTime`](/de/docs/Web/API/PerformancePaintTiming/paintTime)
