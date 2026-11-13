---
title: "WorkerGlobalScope: performance-Eigenschaft"
short-title: performance
slug: Web/API/WorkerGlobalScope/performance
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("Performance API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`performance`**-Eigenschaft der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück. Damit lassen sich Informationen zur Performance von Code erfassen, der im Gültigkeitsbereich des Workers ausgeführt wird.

Performance-Einträge sind auf den jeweiligen Kontext beschränkt. Wenn Sie in einem Worker-Thread eine Markierung erstellen, ist sie weder im Hauptthread noch in anderen Workern sichtbar.

Beachten Sie, dass in Worker-Kontexten nur die folgenden Performance-Schnittstellen verfügbar sind:

- [`Performance`](/de/docs/Web/API/Performance)
- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
- [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)

## Wert

Ein [`Performance`](/de/docs/Web/API/Performance)-Objekt, das Zugriff auf Performance- und Timing-Informationen für den Kontext bietet, in dem die Eigenschaft aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.performance`](/de/docs/Web/API/Window/performance)
