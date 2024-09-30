---
title: TaskAttributionTiming
slug: Web/API/TaskAttributionTiming
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die Schnittstelle **`TaskAttributionTiming`** liefert Informationen über die Arbeit, die an einer langen Aufgabe beteiligt ist, und den zugehörigen Rahmenkontext. Der Rahmenkontext, auch Container genannt, ist das `iframe`, `embed` oder `object`, das im Großen und Ganzen für eine lange Aufgabe verantwortlich gemacht wird.

Normalerweise arbeiten Sie mit `TaskAttributionTiming`-Objekten, wenn Sie [lange Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming) beobachten.

`TaskAttributionTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Ereignis-Timing-Leistungseinträge, indem sie wie folgt qualifiziert werden:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück, da `duration` für diese Schnittstelle nicht anwendbar ist.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `taskattribution` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"unknown"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`TaskAttributionTiming.containerType`](/de/docs/Web/API/TaskAttributionTiming/containerType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ des Rahmencontainers zurück, einer von `iframe`, `embed` oder `object`.
- [`TaskAttributionTiming.containerSrc`](/de/docs/Web/API/TaskAttributionTiming/containerSrc) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das `src`-Attribut des Containers zurück.
- [`TaskAttributionTiming.containerId`](/de/docs/Web/API/TaskAttributionTiming/containerId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das `id`-Attribut des Containers zurück.
- [`TaskAttributionTiming.containerName`](/de/docs/Web/API/TaskAttributionTiming/containerName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das `name`-Attribut des Containers zurück.

## Instanz-Methoden

- [`TaskAttributionTiming.toJSON()`](/de/docs/Web/API/TaskAttributionTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `TaskAttributionTiming`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)
