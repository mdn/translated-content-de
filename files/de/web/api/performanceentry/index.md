---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das **`PerformanceEntry`**-Objekt kapselt eine einzelne Leistungsmetrik, die Teil der Performance-Timeline des Browsers ist.

Die Performance API bietet integrierte Metriken in Form spezialisierter Unterklassen von `PerformanceEntry`. Dazu gehören Einträge für das Laden von Ressourcen, die zeitliche Erfassung von Ereignissen und mehr.

Ein Performance-Eintrag kann auch erstellt werden, indem die Methoden [`Performance.mark()`](/de/docs/Web/API/Performance/mark) oder [`Performance.measure()`](/de/docs/Web/API/Performance/measure) an einer bestimmten Stelle in einer Anwendung aufgerufen werden. So können Sie der Performance-Timeline eigene Metriken hinzufügen.

`PerformanceEntry`-Instanzen gehören immer zu einer der folgenden Unterklassen:

- [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) {{Experimental_Inline}}
- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- [`LayoutShift`](/de/docs/Web/API/LayoutShift) {{Experimental_Inline}}
- [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) {{Experimental_Inline}}
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

## Instanzeigenschaften

- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die den Namen eines Performance-Eintrags angibt. Der Wert hängt vom Untertyp ab.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer des Performance-Eintrags angibt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die den Typ der Leistungsmetrik angibt. Beispielsweise `"mark"`, wenn [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) verwendet wird.
- [`PerformanceEntry.navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Navigation, der der Performance-Eintrag zugeordnet wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Startzeitpunkt der Leistungsmetrik angibt.

## Instanzmethoden

- [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceEntry`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

### Mit Performance-Einträgen arbeiten

Das folgende Beispiel erstellt `PerformanceEntry`-Objekte der Typen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure).
Die Unterklassen `PerformanceMark` und `PerformanceMeasure` erben die Eigenschaften `duration`, `entryType`, `name` und `startTime` von `PerformanceEntry` und setzen sie auf die jeweils passenden Werte.

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
