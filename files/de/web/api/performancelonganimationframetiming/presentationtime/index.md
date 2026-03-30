---
title: "PerformanceLongAnimationFrameTiming: presentationTime Eigenschaft"
short-title: presentationTime
slug: Web/API/PerformanceLongAnimationFrameTiming/presentationTime
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`presentationTime`** schreibgeschützte Eigenschaft des [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Interfaces gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem das UI-Update tatsächlich auf dem Bildschirm gezeichnet wurde.

Die `presentationTime` ist optional — einige Browser können sich entscheiden, immer `0` zurückzugeben oder den Wert überhaupt nicht offenzulegen. Der Wert ist auch implementierungsabhängig — er kann bei Browsern, die sich entscheiden, ihn offenzulegen, unterschiedlich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("Operators/null", "null")}}, falls der Wert nicht offengelegt wird.

## Beispiele

Siehe [Lange Animationsframe-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceLongAnimationFrameTiming.paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime)
