---
title: "PerformanceScriptTiming: sourceFunctionName-Eigenschaft"
short-title: sourceFunctionName
slug: Web/API/PerformanceScriptTiming/sourceFunctionName
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`sourceFunctionName`** der [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Schnittstelle gibt einen Zeichenfolgenwert zurück, der den Namen der Funktion darstellt, die zu dem langen Animationsrahmen (LoAF) beigetragen hat.

Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts sein wird, also das oberste Element des Stacks und nicht eine spezifische langsame Unterfunktion.

Wenn beispielsweise ein Ereignishandler eine Funktion auf oberster Ebene aufruft, die dann eine langsame Unterfunktion aufruft, werden die `source*` Felder den Namen und den Ort der Funktion auf oberster Ebene melden, nicht die langsame Unterfunktion — die Funktion, die an die Plattform-API übergeben wurde, wird immer gemeldet. Der Grund dafür ist die Leistung; ein vollständiger Stack-Trace ist kostspielig.

Im folgenden Codeausschnitt:

```js
setTimeout(function lib_func() {
  slow_function();
});
```

würde `sourceFunctionName` `lib_func` und nicht `slow_function` melden.

## Wert

Ein Zeichenfolgenwert. Gibt eine leere Zeichenfolge zurück, wenn der Funktionsname nicht gefunden wurde.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
