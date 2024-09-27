---
title: "PerformanceScriptTiming: window-Eigenschaft"
short-title: window
slug: Web/API/PerformanceScriptTiming/window
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`window`** schreibgeschützte Eigenschaft der [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Schnittstelle gibt einen Verweis auf ein [`Window`](/de/docs/Web/API/Window)-Objekt zurück, das das `window` des Containers (d. h. entweder das Dokument der obersten Ebene oder einem {{htmlelement("iframe")}}) repräsentiert, in dem das Skript mit dem langen Animationsrahmen (LoAF) ausgeführt wurde.

## Wert

Ein [`Window`](/de/docs/Web/API/Window)-Objekt oder `null`, wenn das Fenster nicht mehr aktiv ist (der Objektverweis ist ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)).

## Beispiele

Siehe [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele in Bezug auf die Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
