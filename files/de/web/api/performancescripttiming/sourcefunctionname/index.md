---
title: "PerformanceScriptTiming: sourceFunctionName-Eigenschaft"
short-title: sourceFunctionName
slug: Web/API/PerformanceScriptTiming/sourceFunctionName
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`sourceFunctionName`** der {{domxref("PerformanceScriptTiming")}}-Schnittstelle gibt einen String zurück, der den Namen der Funktion darstellt, die zu dem langen Animationsframe (LoAF) beigetragen hat.

Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts sein wird, also die oberste Ebene des Stacks, und nicht eine spezifische langsame Unterfunktion.

Zum Beispiel, wenn ein Ereignishandler eine Top-Level-Funktion aufruft, die dann eine langsame Unterfunktion aufruft, werden die Felder `source*` den Namen und die Position der Top-Level-Funktion melden, nicht die langsame Unterfunktion - die Funktion, die an die Plattform-API übergeben wurde, ist immer die, die gemeldet wird. Dies geschieht aus Leistungsgründen; ein vollständiger Stack-Trace ist kostspielig.

Im folgenden Beispiel:

```js
setTimeout(function lib_func() {
  slow_function();
});
```

würde `sourceFunctionName` `lib_func` melden, nicht `slow_function`.

## Wert

Ein String. Gibt einen leeren String zurück, wenn der Funktionsname nicht gefunden wurde.

## Beispiele

Siehe [Langes Animationsframe-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele, die sich auf die Long Animation Frames API beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Langes Animationsframe-Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
