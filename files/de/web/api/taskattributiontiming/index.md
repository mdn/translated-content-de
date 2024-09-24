---
title: TaskAttributionTiming
slug: Web/API/TaskAttributionTiming
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`TaskAttributionTiming`**-Schnittstelle liefert Informationen über die Arbeit, die in eine lang andauernde Aufgabe involviert ist, und ihren zugehörigen Frame-Kontext. Der Frame-Kontext, auch Container genannt, ist das iframe, embed oder object, das im Ganzen für eine lang andauernde Aufgabe verantwortlich ist.

Sie arbeiten normalerweise mit `TaskAttributionTiming`-Objekten, wenn Sie [lange Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming) beobachten.

`TaskAttributionTiming` erbt von {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden {{domxref("PerformanceEntry")}}-Eigenschaften für Event-Timing-Performance-Einträge, indem sie wie folgt qualifiziert werden:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück, da `duration` für diese Schnittstelle nicht anwendbar ist.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `taskattribution` zurück.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"unknown"` zurück.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- {{domxref('TaskAttributionTiming.containerType')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ des Frame-Containers zurück, entweder `iframe`, `embed` oder `object`.
- {{domxref('TaskAttributionTiming.containerSrc')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das `src`-Attribut des Containers zurück.
- {{domxref('TaskAttributionTiming.containerId')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das `id`-Attribut des Containers zurück.
- {{domxref('TaskAttributionTiming.containerName')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das `name`-Attribut des Containers zurück.

## Instanzmethoden

- {{domxref("TaskAttributionTiming.toJSON()")}} {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `TaskAttributionTiming`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PerformanceLongTaskTiming")}}
