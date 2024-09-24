---
title: "PerformanceScriptTiming: Eigenschaft pauseDuration"
short-title: pauseDuration
slug: Web/API/PerformanceScriptTiming/pauseDuration
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`pauseDuration`** der {{domxref("PerformanceScriptTiming")}}-Schnittstelle gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Gesamtzeit in Millisekunden angibt, die das Skript mit dem "Pausieren" synchroner Operationen (zum Beispiel {{domxref("Window.alert()")}}-Aufrufe oder synchrone {{domxref("XMLHttpRequest")}}s) verbringt.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}.

## Beispiele

Siehe [Langes Animationsrahmen-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Langes Animationsrahmen-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
