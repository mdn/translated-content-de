---
title: "PerformanceLongAnimationFrameTiming: presentationTime Eigenschaft"
short-title: presentationTime
slug: Web/API/PerformanceLongAnimationFrameTiming/presentationTime
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`presentationTime`** des [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Interfaces gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem das Benutzeroberflächen-Update tatsächlich auf dem Bildschirm angezeigt wurde.

Das `presentationTime` ist optional — einige Browser können immer `0` zurückgeben oder den Wert überhaupt nicht anzeigen. Der Wert ist auch implementierungsabhängig — er kann sich zwischen Browsern unterscheiden, die sich dafür entscheiden, ihn anzuzeigen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("null")}}, wenn der Wert nicht angezeigt wird.

## Beispiele

Siehe [Long Animation Frame Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceLongAnimationFrameTiming.paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime)
