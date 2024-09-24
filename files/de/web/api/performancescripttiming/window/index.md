---
title: "PerformanceScriptTiming: Fenster-Eigenschaft"
short-title: Fenster
slug: Web/API/PerformanceScriptTiming/window
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`window`** schreibgeschützte Eigenschaft der {{domxref("PerformanceScriptTiming")}}-Schnittstelle gibt eine Referenz auf ein {{domxref("Window")}}-Objekt zurück, das das `window` des Containers (d. h. entweder das Dokument auf oberster Ebene oder ein {{htmlelement("iframe")}}) darstellt, in dem das die lange Animationsphase (LoAF) verursachende Skript ausgeführt wurde.

## Wert

Ein {{domxref("Window")}}-Objekt oder `null`, wenn das Fenster nicht mehr aktiv ist (die Objektreferenz ist ein [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)).

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
