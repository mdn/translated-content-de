---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
l10n:
  sourceCommit: 468fcd167cd6f5979b1f6c92583894a281ae886e
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das **`PerformanceEntry`**-Objekt kapselt eine einzelne Leistungsmetrik, die Teil der Performance-Timeline des Browsers ist.

Die Performance API bietet integrierte Metriken in Form spezialisierter Unterklassen von `PerformanceEntry`. Dazu gehören Einträge für das Laden von Ressourcen, das Timing von Ereignissen und weitere Metriken.

Ein Performance-Eintrag kann auch erstellt werden, indem die Methoden [`Performance.mark()`](/de/docs/Web/API/Performance/mark) oder [`Performance.measure()`](/de/docs/Web/API/Performance/measure) an einer bestimmten Stelle in einer Anwendung aufgerufen werden. So können Sie der Performance-Timeline eigene Metriken hinzufügen.

`PerformanceEntry`-Instanzen gehören immer zu einer der folgenden Unterklassen:

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

## Instanzeigenschaften

- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen eines Performance-Eintrags angibt. Der Wert hängt vom Untertyp ab.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer des Performance-Eintrags angibt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Ein String, der den Typ der Leistungsmetrik angibt. Bei Verwendung von [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) ist dies beispielsweise `"mark"`.
- [`PerformanceEntry.navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Navigation, der der Performance-Eintrag zugeordnet ist.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit der Leistungsmetrik angibt.

## Instanzmethoden

- [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON)
  - : Gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `PerformanceEntry`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

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
