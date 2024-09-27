---
title: "PerformanceLongAnimationFrameTiming: scripts-Eigenschaft"
short-title: scripts
slug: Web/API/PerformanceLongAnimationFrameTiming/scripts
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte **`scripts`**-Eigenschaft des [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Interfaces gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten zurück.

Skriptattribution wird nur für Skripte bereitgestellt, die im Hauptthread einer Seite ausgeführt werden, einschließlich gleich-originärer `<iframe>`s. Allerdings werden fremde `<iframe>`s, [Web Worker](/de/docs/Web/API/Web_Workers_API), [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Erweiterungs](/de/docs/Mozilla/Add-ons/WebExtensions)-Code keine Skripattribution in langen Animationsrahmen haben, selbst wenn sie die Dauer eines solchen beeinflussen.

## Wert

Ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
