---
title: "PerformanceScriptTiming: forcedStyleAndLayoutDuration-Eigenschaft"
short-title: forcedStyleAndLayoutDuration
slug: Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`forcedStyleAndLayoutDuration`** schreibgeschützte Eigenschaft der {{domxref("PerformanceScriptTiming")}}-Schnittstelle gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die gesamte Zeit angibt, die vom Skript für erzwungene Layout-/Stilverarbeitung in Millisekunden aufgewendet wurde. Siehe [Vermeidung von Layout-Thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.

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
- {{domxref("PerformanceLongAnimationFrameTiming")}}
