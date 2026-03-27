---
title: "PerformanceLongAnimationFrameTiming: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/PerformanceLongAnimationFrameTiming/presentationTime
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

Die **`presentationTime`**-Eigenschaft, die schreibgeschützt ist, des Interfaces [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem das UI-Update tatsächlich auf dem Bildschirm gezeichnet wurde.

Der `presentationTime` ist optional — einige Browser können sich entscheiden, immer `0` zurückzugeben oder den Wert überhaupt nicht offenzulegen. Der Wert hängt auch von der Implementierung ab — er kann sich in Browsern unterscheiden, die sich entscheiden, ihn offenzulegen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("Operators/null", "null")}}, falls der Wert nicht offengelegt wird.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceLongAnimationFrameTiming.paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime)
