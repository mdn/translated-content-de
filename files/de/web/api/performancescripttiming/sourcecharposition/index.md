---
title: "PerformanceScriptTiming: sourceCharPosition-Eigenschaft"
short-title: sourceCharPosition
slug: Web/API/PerformanceScriptTiming/sourceCharPosition
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`sourceCharPosition`**-Eigenschaft des [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Interfaces ist eine schreibgeschützte Eigenschaft, die eine Zahl zurückgibt, welche die Skriptzeichenposition des Skriptmerkmals darstellt, das zum langen Animationsrahmen (LoAF) beigetragen hat.

Es ist wichtig zu beachten, dass der gemeldete Funktionsstandort der "Einstiegspunkt" des Skripts sein wird, also die oberste Ebene des Stacks und nicht eine spezifische langsame Unterfunktion. Siehe [`PerformanceScriptTiming.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) für eine weitere Diskussion zu diesem Thema.

## Wert

Eine Zahl. Gibt `-1` zurück, wenn die Skriptzeichenposition nicht gefunden wurde.

## Beispiele

Siehe [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
