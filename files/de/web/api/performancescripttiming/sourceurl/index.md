---
title: "PerformanceScriptTiming: sourceURL-Eigenschaft"
short-title: sourceURL
slug: Web/API/PerformanceScriptTiming/sourceURL
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`sourceURL`** des [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Interfaces gibt einen String zurück, der die URL des Skripts darstellt.

Es ist wichtig zu beachten, dass die berichtete Funktionsposition der "Einstiegspunkt" des Skripts sein wird, also die höchste Ebene des Stacks, nicht eine spezifische langsame Unterfunktion. Weitere Diskussionen hierzu finden Sie unter [`PerformanceScriptTiming.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName).

## Wert

Ein String. Gibt einen leeren String zurück, wenn die URL nicht gefunden wurde.

## Beispiele

Siehe [Timing langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
