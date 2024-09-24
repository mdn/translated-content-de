---
title: "PerformanceScriptTiming: sourceCharPosition-Eigenschaft"
short-title: sourceCharPosition
slug: Web/API/PerformanceScriptTiming/sourceCharPosition
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`sourceCharPosition`** des {{domxref("PerformanceScriptTiming")}}-Interfaces gibt eine Zahl zurück, die die Skriptzeichenposition der Skriptfunktion darstellt, die zum langen Animationsframe (LoAF) beigetragen hat.

Es ist wichtig zu beachten, dass der gemeldete Funktionsort der „Einstiegspunkt“ des Skripts sein wird, also die oberste Ebene des Stacks, nicht irgendeine spezifische langsame Unterfunktion. Weitere Diskussionen dazu finden Sie unter {{domxref("PerformanceScriptTiming.sourceFunctionName")}}.

## Wert

Eine Zahl. Gibt `-1` zurück, wenn die Skriptzeichenposition nicht gefunden wurde.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele zur Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
