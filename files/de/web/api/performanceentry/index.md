---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das **`PerformanceEntry`**-Objekt kapselt eine einzelne Leistungsmetrik, die Teil der Leistungschronologie des Browsers ist.

Die Performance-API bietet eingebaute Metriken, die spezialisierte Unterklassen von `PerformanceEntry` sind. Dazu gehören Einträge für das Laden von Ressourcen, Event-Timing und mehr.

Ein Performance-Eintrag kann auch erstellt werden, indem die Methoden [`Performance.mark()`](/de/docs/Web/API/Performance/mark) oder [`Performance.measure()`](/de/docs/Web/API/Performance/measure) zu einem bestimmten Zeitpunkt in einer Anwendung aufgerufen werden. Dies ermöglicht es Ihnen, eigene Metriken zur Leistungschronologie hinzuzufügen.

Die `PerformanceEntry`-Instanzen werden immer eine der folgenden Unterklassen sein:

- [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) {{Experimental_Inline}}
- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- [`LayoutShift`](/de/docs/Web/API/LayoutShift) {{Experimental_Inline}}
- `PerformanceContainerTiming` {{Experimental_Inline}}
- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) {{Experimental_Inline}}
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) {{Experimental_Inline}}
- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) {{Experimental_Inline}}
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) {{Experimental_Inline}}
- [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation) {{Experimental_Inline}}
- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) {{Experimental_Inline}}
- [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)

## Instanz-Eigenschaften

- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen eines Performance-Eintrags darstellt. Der Wert hängt vom Untertyp ab.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer des Performance-Eintrags darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Ein String, der den Typ der Leistungsmetrik darstellt. Zum Beispiel `"mark"`, wenn [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) verwendet wird.
- [`PerformanceEntry.navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Navigation, unter der der Performance-Eintrag ausgegeben wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit für die Leistungsmetrik darstellt.

## Instanz-Methoden

- [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceEntry`-Objekts zurück.

## Beispiel

### Arbeiten mit Performance-Einträgen

Das folgende Beispiel erstellt `PerformanceEntry`-Objekte der Typen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure).
Die Unterklassen `PerformanceMark` und `PerformanceMeasure` erben die Eigenschaften `duration`, `entryType`, `name` und `startTime` von `PerformanceEntry` und setzen sie auf ihre entsprechenden Werte.

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
