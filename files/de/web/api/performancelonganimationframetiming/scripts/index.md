---
title: "PerformanceLongAnimationFrameTiming: scripts-Eigenschaft"
short-title: scripts
slug: Web/API/PerformanceLongAnimationFrameTiming/scripts
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`scripts`**-Eigenschaft der schnittstelle {{domxref("PerformanceLongAnimationFrameTiming")}} gibt ein Array von {{domxref("PerformanceScriptTiming")}}-Objekten zurück.

Eine Zuordnung zu Skripten erfolgt nur für Skripte, die im Hauptthread einer Seite ausgeführt werden, einschließlich `<iframe>`s mit derselben Herkunft. Cross-Origin-`<iframe>`s, [Web Worker](/de/docs/Web/API/Web_Workers_API), [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Erweiterungs](/de/docs/Mozilla/Add-ons/WebExtensions)-Code werden jedoch keine Skriptzuordnung in langen Animationsrahmen haben, selbst wenn sie die Dauer eines solchen Rahmens beeinflussen.

## Wert

Ein Array von {{domxref("PerformanceScriptTiming")}}-Objekten.

## Beispiele

Sehen Sie [Lange Animationsrahmen-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Langes Animationsrahmen-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceScriptTiming")}}
