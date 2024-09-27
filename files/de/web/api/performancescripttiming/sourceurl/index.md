---
title: "PerformanceScriptTiming: sourceURL-Eigenschaft"
short-title: sourceURL
slug: Web/API/PerformanceScriptTiming/sourceURL
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`sourceURL`**-Eigenschaft der [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die eine Zeichenkette zurückgibt, welche die URL des Skripts darstellt.

Es ist wichtig zu beachten, dass der gemeldete Funktionsstandort der "Einstiegspunkt" des Skripts sein wird, das heißt, die oberste Ebene des Stapels, nicht eine spezifische langsame Teilfunktion. Für weitere Diskussionen zu diesem Thema siehe [`PerformanceScriptTiming.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName).

## Wert

Eine Zeichenkette. Gibt eine leere Zeichenkette zurück, wenn die URL nicht gefunden wurde.

## Beispiele

Siehe [Timing für lange Animations-Frames](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing für lange Animations-Frames](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
