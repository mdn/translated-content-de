---
title: "PerformanceScriptTiming: sourceFunctionName Eigenschaft"
short-title: sourceFunctionName
slug: Web/API/PerformanceScriptTiming/sourceFunctionName
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`sourceFunctionName`** schreibgeschützte Eigenschaft der [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Schnittstelle gibt einen String zurück, der den Namen der Funktion angibt, die zum langen Animationsrahmen (LoAF) beigetragen hat.

Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts sein wird, also die oberste Ebene des Stacks, nicht eine spezifische langsame Unterfunktion.

Wenn zum Beispiel ein Ereignishandler eine Hauptfunktion aufruft, die dann eine langsame Unterfunktion aufruft, werden die `source*` Felder den Namen und Standort der Hauptfunktion melden, nicht die langsame Unterfunktion — die Funktion, die an die Plattform-API übergeben wurde, wird immer gemeldet. Das liegt aus Performancegründen daran, dass ein vollständiger Stack-Trace kostspielig ist.

Im folgenden Code-Snippet:

```js
setTimeout(function lib_func() {
  slow_function();
});
```

wird `sourceFunctionName` `lib_func` und nicht `slow_function` melden.

## Wert

Ein String. Gibt einen leeren String zurück, wenn der Funktionsname nicht gefunden wurde.

## Beispiele

Siehe [Zeitmessung langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeitmessung langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
