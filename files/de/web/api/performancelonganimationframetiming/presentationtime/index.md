---
title: "PerformanceLongAnimationFrameTiming: Eigenschaft presentationTime"
short-title: presentationTime
slug: Web/API/PerformanceLongAnimationFrameTiming/presentationTime
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`presentationTime`** der Schnittstelle [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Aktualisierung der Benutzeroberfläche tatsächlich auf dem Bildschirm dargestellt wurde.

Der Wert von `presentationTime` kann `null` sein: Der zugrunde liegende Zeitstempel ist implementierungsabhängig. Browser, die ihn nicht bereitstellen, geben daher stattdessen `null` zurück.
Da [`PerformanceLongAnimationFrameTiming.paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime) in allen Implementierungen auf dieselbe Weise belegt wird, ist diese Eigenschaft für Metriken, die browserübergreifend vergleichbar sein müssen, zuverlässiger.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("null")}}, wenn der Wert nicht verfügbar gemacht wird.

## Beispiele

Beispiele zur Long Animation Frames API finden Sie unter [Timing langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceLongAnimationFrameTiming.paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime)
