---
title: TaskAttributionTiming
slug: Web/API/TaskAttributionTiming
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die Schnittstelle **`TaskAttributionTiming`** liefert Informationen über die Arbeit, die mit einer lang andauernden Aufgabe verbunden ist, sowie über den zugehörigen Frame-Kontext. Der Frame-Kontext, auch Container genannt, ist das iframe-, embed- oder object-Element, das insgesamt mit der lang andauernden Aufgabe in Verbindung gebracht wird.

Sie arbeiten üblicherweise mit `TaskAttributionTiming`-Objekten, wenn Sie [lang andauernde Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming) beobachten.

`TaskAttributionTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Performance-Einträge zur Ereigniszeitmessung mit den folgenden Festlegungen:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück, da `duration` für diese Schnittstelle nicht anwendbar ist.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `taskattribution` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"unknown"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück.

Diese Schnittstelle unterstützt außerdem die folgenden Eigenschaften:

- [`TaskAttributionTiming.containerType`](/de/docs/Web/API/TaskAttributionTiming/containerType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ des Frame-Containers zurück: `iframe`, `embed` oder `object`.
- [`TaskAttributionTiming.containerSrc`](/de/docs/Web/API/TaskAttributionTiming/containerSrc) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das `src`-Attribut des Containers zurück.
- [`TaskAttributionTiming.containerId`](/de/docs/Web/API/TaskAttributionTiming/containerId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das `id`-Attribut des Containers zurück.
- [`TaskAttributionTiming.containerName`](/de/docs/Web/API/TaskAttributionTiming/containerName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das `name`-Attribut des Containers zurück.

## Instanzmethoden

- [`TaskAttributionTiming.toJSON()`](/de/docs/Web/API/TaskAttributionTiming/toJSON) {{Experimental_Inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `TaskAttributionTiming`-Objekt repräsentiert. Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)
