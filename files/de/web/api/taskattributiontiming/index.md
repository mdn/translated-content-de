---
title: TaskAttributionTiming
slug: Web/API/TaskAttributionTiming
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{SeeCompatTable}}{{APIRef("Performance API")}}{{non-standard_header}}

Die Schnittstelle **`TaskAttributionTiming`** gibt Informationen über die Arbeit zurück, die mit einer langen Aufgabe verbunden ist, sowie über den zugehörigen Frame-Kontext. Der Frame-Kontext, auch Container genannt, ist das `iframe`-, `embed`- oder `object`-Element, das insgesamt mit der langen Aufgabe in Verbindung gebracht wird.

Üblicherweise arbeiten Sie mit `TaskAttributionTiming`-Objekten, wenn Sie [lange Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming) beobachten.

`TaskAttributionTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle übernimmt die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) und legt ihre Werte wie folgt fest:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück, da `duration` für diese Schnittstelle nicht anwendbar ist.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `taskattribution` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"unknown"` zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `0` zurück.

Diese Schnittstelle unterstützt außerdem die folgenden Eigenschaften:

- [`TaskAttributionTiming.containerType`](/de/docs/Web/API/TaskAttributionTiming/containerType) {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt den Typ des Frame-Containers zurück: `iframe`, `embed` oder `object`.
- [`TaskAttributionTiming.containerSrc`](/de/docs/Web/API/TaskAttributionTiming/containerSrc) {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt das Attribut `src` des Containers zurück.
- [`TaskAttributionTiming.containerId`](/de/docs/Web/API/TaskAttributionTiming/containerId) {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt das Attribut `id` des Containers zurück.
- [`TaskAttributionTiming.containerName`](/de/docs/Web/API/TaskAttributionTiming/containerName) {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt das Attribut `name` des Containers zurück.

## Instanzmethoden

- [`TaskAttributionTiming.toJSON()`](/de/docs/Web/API/TaskAttributionTiming/toJSON) {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `TaskAttributionTiming`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)
