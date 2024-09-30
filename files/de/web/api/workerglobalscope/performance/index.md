---
title: "WorkerGlobalScope: performance-Eigenschaft"
short-title: performance
slug: Web/API/WorkerGlobalScope/performance
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Performance API")}}{{AvailableInWorkers("worker")}}

Die **`performance`**-Eigenschaft der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das verwendet werden kann, um Leistungsinformationen über den im Scope des Workers laufenden Code zu sammeln.

Leistungseinträge sind kontextabhängig. Wenn Sie eine Markierung auf einem Worker-Thread erstellen, wird diese nicht im Haupt-Thread oder in anderen Workern angezeigt.

Beachten Sie, dass nur die folgenden Leistungs-Schnittstellen in Worker-Kontexten verfügbar sind:

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
