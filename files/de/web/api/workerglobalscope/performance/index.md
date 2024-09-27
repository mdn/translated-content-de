---
title: "WorkerGlobalScope: performance-Eigenschaft"
short-title: performance
slug: Web/API/WorkerGlobalScope/performance
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Performance API")}}{{AvailableInWorkers("worker")}}

Die **`performance`**-Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das verwendet werden kann, um Leistungsinformationen über Code zu sammeln, der im Bereich des Workers ausgeführt wird.

Leistungseinträge sind pro Kontext. Wenn Sie eine Markierung in einem Worker-Thread erstellen, wird sie im Haupt-Thread oder in anderen Workern nicht sichtbar sein.

Beachten Sie, dass nur die folgenden Performance-Interfaces in Worker-Kontexten verfügbar sind:

- [`Performance`](/de/docs/Web/API/Performance)
- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
- [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)

## Wert

Ein [`Performance`](/de/docs/Web/API/Performance)-Objekt, das Zugriff auf leistungs- und zeitbezogene Informationen für den Kontext bietet, in dem es aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.performance`](/de/docs/Web/API/Window/performance)
