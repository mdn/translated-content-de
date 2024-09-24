---
title: "PerformanceLongAnimationFrameTiming: Eigenschaft renderStart"
short-title: renderStart
slug: Web/API/PerformanceLongAnimationFrameTiming/renderStart
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`renderStart`** des {{domxref("PerformanceLongAnimationFrameTiming")}}-Interfaces gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Startzeit des Rendering-Zyklus anzeigt. Dieser umfasst Rückrufe von {{domxref("Window.requestAnimationFrame()")}}, die Berechnung von Stil und Layout, Rückrufe von {{domxref("ResizeObserver")}} und von {{domxref("IntersectionObserver")}}.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceScriptTiming")}}
