---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Das **`PerformanceEntry`** Objekt kapselt eine einzelne Leistungsmetrik, die Teil der Leistungszeitleiste des Browsers ist.

Die Performance API bietet eingebaute Metriken, die spezialisierte Unterklassen von `PerformanceEntry` sind. Dazu gehören Einträge für das Laden von Ressourcen, Ereignis-Timing, [first input delay](/de/docs/Glossary/first_input_delay) (FID) und mehr.

Ein Performance-Eintrag kann auch erstellt werden, indem die Methoden [`Performance.mark()`](/de/docs/Web/API/Performance/mark) oder [`Performance.measure()`](/de/docs/Web/API/Performance/measure) an einem expliziten Punkt in einer Anwendung aufgerufen werden. Damit können Sie eigene Metriken zur Leistungszeitleiste hinzufügen.

Die `PerformanceEntry` Instanzen sind immer eine der folgenden Unterklassen:

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- [`LayoutShift`](/de/docs/Web/API/LayoutShift)
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)
- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)
- [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)

## Instanzeigenschaften

- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen für einen Performance-Eintrag darstellt. Der Wert hängt vom Untertyp ab.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Ein String, der den Typ der Leistungsmetrik darstellt. Zum Beispiel `"mark"`, wenn [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) verwendet wird.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit für die Leistungsmetrik darstellt.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer des Performance-Eintrags darstellt.

## Instanzmethoden

- [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceEntry` Objekts zurück.

## Beispiel

### Arbeiten mit Performance-Einträgen

Das folgende Beispiel erstellt `PerformanceEntry` Objekte, die von den Typen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure) sind. Die Unterklassen `PerformanceMark` und `PerformanceMeasure` erben die Eigenschaften `duration`, `entryType`, `name` und `startTime` von `PerformanceEntry` und setzen sie auf ihre entsprechenden Werte.

```js
// Place at a location in the code that starts login
performance.mark("login-started");

// Place at a location in the code that finishes login
performance.mark("login-finished");

// Measure login duration
performance.measure("login-duration", "login-started", "login-finished");

function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
