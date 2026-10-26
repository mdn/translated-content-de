---
title: "LargestContentfulPaint: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/LargestContentfulPaint/presentationTime
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`presentationTime`** der Schnittstelle [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gerenderten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.

Der Wert von `presentationTime` kann `null` sein: Der zugrunde liegende Zeitstempel ist implementierungsabhängig. Browser, die ihn nicht bereitstellen, geben daher stattdessen `null` zurück.
Da [`LargestContentfulPaint.paintTime`](/de/docs/Web/API/LargestContentfulPaint/paintTime) in allen Implementierungen auf dieselbe Weise bereitgestellt wird, ist dies der zuverlässigere Wert für Metriken, die browserübergreifend vergleichbar sein müssen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("null")}}, wenn der Wert nicht verfügbar ist.

## Beispiele

Siehe [Getrennte Paint- und Präsentationszeitpunkte beobachten](/de/docs/Web/API/LargestContentfulPaint#observing_separate_paint_and_presentation_timings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LargestContentfulPaint.paintTime`](/de/docs/Web/API/LargestContentfulPaint/paintTime)
