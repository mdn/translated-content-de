---
title: "PerformanceScriptTiming: window-Eigenschaft"
short-title: window
slug: Web/API/PerformanceScriptTiming/window
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte **`window`**-Eigenschaft des [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Interfaces gibt eine Referenz auf ein [`Window`](/de/docs/Web/API/Window)-Objekt zurück, das das `window` des Containers (d.h. entweder das Dokument der obersten Ebene oder ein {{htmlelement("iframe")}}) repräsentiert, in dem das Skript ausgeführt wurde, das den langen Animationsrahmen (LoAF) verursacht hat.

## Wert

Ein [`Window`](/de/docs/Web/API/Window)-Objekt oder `null`, wenn das Fenster nicht mehr aktiv ist (die Objektreferenz ist ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)).

## Beispiele

Siehe [Timing von langen Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele, die sich auf die Long Animation Frames API beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing von langen Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
