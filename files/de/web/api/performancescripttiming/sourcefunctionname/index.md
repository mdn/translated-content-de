---
title: "PerformanceScriptTiming: sourceFunctionName-Eigenschaft"
short-title: sourceFunctionName
slug: Web/API/PerformanceScriptTiming/sourceFunctionName
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`sourceFunctionName`**-Eigenschaft des [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Interfaces ist eine schreibgeschützte Eigenschaft, die einen String zurückgibt, der den Namen der Funktion darstellt, die zu dem langen Animationsframe (LoAF) beigetragen hat.

Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts sein wird, also das oberste Level des Stacks, nicht eine spezifische langsame Unterfunktion.

Zum Beispiel, wenn ein Ereignishandler eine Funktion auf oberster Ebene aufruft, die dann eine langsame Unterfunktion aufruft, werden die `source*` Felder den Namen und den Ort der Funktion auf oberster Ebene melden, nicht der langsamen Unterfunktion — die Funktion, die an die Plattform-API übergeben wurde, wird immer gemeldet. Dies geschieht aus Leistungsgründen; ein vollständiger Stack-Trace ist kostspielig.

Im folgenden Code-Snippet:

```js
setTimeout(function libFunc() {
  slowFunction();
});
```

würde `sourceFunctionName` `libFunc` melden, nicht `slowFunction`.

## Wert

Ein String. Gibt einen leeren String zurück, wenn der Funktionsname nicht gefunden wurde.

## Beispiele

Sehen Sie sich [Long Animation Frame Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long Animation Frame Timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
