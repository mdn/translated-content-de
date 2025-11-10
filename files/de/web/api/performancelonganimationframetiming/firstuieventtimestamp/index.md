---
title: "PerformanceLongAnimationFrameTiming: firstUIEventTimestamp-Eigenschaft"
short-title: firstUIEventTimestamp
slug: Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp
l10n:
  sourceCommit: a396b67c90885e19659fbd770504c6335438fd3f
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte **`firstUIEventTimestamp`**-Eigenschaft des [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Interfaces gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit des ersten UI-Ereignisses angibt – wie z. B. ein Maus- oder Tastaturereignis –, das während des aktuellen Animationsframes verarbeitet wird. Beachten Sie, dass dieser Zeitstempel vor dem Beginn dieses Animationsframes liegen kann, wenn es eine Verzögerung zwischen dem Auftreten des Ereignisses und seiner Verarbeitung gab.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Siehe [Lange Animationsframe-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lange Animationsframe-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
