---
title: "PerformanceScriptTiming: pauseDuration-Eigenschaft"
short-title: pauseDuration
slug: Web/API/PerformanceScriptTiming/pauseDuration
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`pauseDuration`** der Schnittstelle [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Gesamtzeit in Millisekunden angibt, die das Skript mit dem "Pausieren" von synchronen Operationen verbracht hat (zum Beispiel, [`Window.alert()`](/de/docs/Web/API/Window/alert)-Aufrufe oder synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s).

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Siehe [Lange Animations-Frame-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele, die sich auf die Long Animation Frames API beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lange Animations-Frame-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
