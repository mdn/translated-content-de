---
title: "PerformanceLongAnimationFrameTiming: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/PerformanceLongAnimationFrameTiming/paintTime
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`paintTime`** des [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Interfaces gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die Renderphase endete und der Animationsframe begann.

Die `paintTime` ist weitgehend interoperabel: Der Wert sollte in unterschiedlichen Implementierungen gleich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele, die sich auf die Long Animation Frames API beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceLongAnimationFrameTiming.presentationTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/presentationTime)
