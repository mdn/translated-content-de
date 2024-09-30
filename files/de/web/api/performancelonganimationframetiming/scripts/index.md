---
title: "PerformanceLongAnimationFrameTiming: scripts-Eigenschaft"
short-title: scripts
slug: Web/API/PerformanceLongAnimationFrameTiming/scripts
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`scripts`** des [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Interfaces gibt ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten zurück.

Die Skriptzuordnung wird nur für Skripte bereitgestellt, die im Hauptthread einer Seite ausgeführt werden, einschließlich gleich-originischer `<iframe>`s. Allerdings erhalten cross-origin `<iframe>`s, [Web Worker](/de/docs/Web/API/Web_Workers_API), [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Erweiterungs](/de/docs/Mozilla/Add-ons/WebExtensions)-Code keine Skriptzuordnung in langen Animationsrahmen, selbst wenn sie die Dauer eines solchen beeinflussen.

## Wert

Ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten.

## Beispiele

Siehe [Long Animation Frame Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long Animation Frame Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
