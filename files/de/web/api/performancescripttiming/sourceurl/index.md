---
title: "PerformanceScriptTiming: sourceURL-Eigenschaft"
short-title: sourceURL
slug: Web/API/PerformanceScriptTiming/sourceURL
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`sourceURL`**-Eigenschaft der Schnittstelle {{domxref("PerformanceScriptTiming")}} gibt eine Zeichenkette zurück, die die URL des Skripts darstellt.

Es ist wichtig zu beachten, dass der gemeldete Funktionsstandort der "Einstiegspunkt" des Skripts sein wird, also die oberste Ebene des Stacks, und nicht eine spezifische langsame Unterfunktion. Siehe {{domxref("PerformanceScriptTiming.sourceFunctionName")}} für mehr Diskussion zu diesem Thema.

## Wert

Eine Zeichenkette. Gibt eine leere Zeichenkette zurück, wenn die URL nicht gefunden wurde.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
