---
title: "WorkerGlobalScope: performance-Eigenschaft"
short-title: performance
slug: Web/API/WorkerGlobalScope/performance
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Performance API")}}{{AvailableInWorkers("worker")}}

Die **`performance`**-Eigenschaft des {{domxref("WorkerGlobalScope")}}-Interfaces gibt ein {{domxref("Performance")}}-Objekt zurück, das verwendet werden kann, um Leistungsinformationen über den im Worker-Kontext ausgeführten Code zu sammeln.

Performance-Einträge gelten pro Kontext. Wenn Sie eine Markierung in einem Worker-Thread erstellen, wird diese nicht im Haupt-Thread oder in anderen Workern sichtbar sein.

Beachten Sie, dass nur die folgenden Performance-Interfaces in Worker-Kontexten verfügbar sind:

- {{domxref("Performance")}}
- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceObserver")}}
- {{domxref("PerformanceObserverEntryList")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformanceServerTiming")}}

## Wert

Ein {{domxref("Performance")}}-Objekt, das Zugriff auf leistungs- und zeitbezogene Informationen für den Kontext bietet, auf dem es aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.performance")}}
