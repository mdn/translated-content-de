---
title: "PerformanceLongAnimationFrameTiming: Eigenschaft renderStart"
short-title: renderStart
slug: Web/API/PerformanceLongAnimationFrameTiming/renderStart
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`renderStart`** der Schnittstelle [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Startzeit des Renderzyklus angibt. Dieser umfasst Rückrufe von [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die Berechnung von Stil und Layout, Rückrufe von [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) und Rückrufe von [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver).

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Siehe [Langzeit-Animations-Frame-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele, die mit der Long Animation Frames API zusammenhängen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Langzeit-Animations-Frame-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
