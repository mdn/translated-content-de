---
title: "PerformanceScriptTiming: pauseDuration-Eigenschaft"
short-title: pauseDuration
slug: Web/API/PerformanceScriptTiming/pauseDuration
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`pauseDuration`** schreibgeschützte Eigenschaft des [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Interfaces gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die gesamte Zeit in Millisekunden angibt, die das Skript für das "Pausieren" synchroner Operationen aufgewendet hat (zum Beispiel bei Aufrufen von [`Window.alert()`](/de/docs/Web/API/Window/alert) oder synchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s).

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Sehen Sie sich [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele in Bezug auf die Long Animation Frames API an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
