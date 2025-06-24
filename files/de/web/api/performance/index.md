---
title: Leistung
slug: Web/API/Performance
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das **`Performance`** Interface bietet Zugriff auf leistungsbezogene Informationen für die aktuelle Seite.

Leistungseinträge sind spezifisch für jeden Ausführungskontext. Sie können Leistungsinformationen für Code abrufen, der in einem Fenster ausgeführt wird, über [`Window.performance`](/de/docs/Web/API/Window/performance) und für Code, der in einem Worker läuft, über [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `Performance` Interface erbt keine Eigenschaften._

- [`Performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) {{ReadOnlyInline}}

  - : Eine [`EventCounts`](/de/docs/Web/API/EventCounts) Karte, die die Anzahl der Ereignisse enthält, die pro Ereignistyp ausgelöst wurden.

- [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein veraltetes [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation) Objekt, das nützliche Informationen über die im `timing` aufgeführten Vorgänge bietet, einschließlich Informationen darüber, ob die Seite ein Ladevorgang oder eine Aktualisierung war, wie viele Weiterleitungen erfolgt sind, usw.

- [`Performance.timing`](/de/docs/Web/API/Performance/timing) {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein veraltetes [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Objekt, das latenzbezogene Leistungsinformationen enthält.

- [`Performance.memory`](/de/docs/Web/API/Performance/memory) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Eine _nicht standardisierte_ Erweiterung, die in Chrome hinzugefügt wurde. Diese Eigenschaft bietet ein Objekt mit grundlegenden Informationen zur Speichernutzung. _Sie \*\*sollten diese nicht standardisierte API nicht verwenden._
- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) {{ReadOnlyInline}}
  - : Gibt den hochauflösenden Zeitstempel der Startzeit der Leistungsmessung zurück.

## Instanz-Methoden

_Das `Performance` Interface erbt keine Methoden._

- [`Performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks)
  - : Entfernt die angegebene _Markierung_ aus dem Leistungseintrags-Buffer des Browsers.
- [`Performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures)
  - : Entfernt das angegebene _Maß_ aus dem Leistungseintrags-Buffer des Browsers.
- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)
  - : Entfernt alle [Leistungseinträge](/de/docs/Web/API/PerformanceEntry) mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"resource"` aus dem Leistungsdaten-Buffer des Browsers.
- [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Objekten basierend auf dem angegebenen _Filter_ zurück.
- [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Objekten basierend auf dem angegebenen _Namen_ und _Eintragstyp_ zurück.
- [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Objekten des angegebenen _Eintragstyps_ zurück.
- [`Performance.mark()`](/de/docs/Web/API/Performance/mark)
  - : Erstellt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) im Leistungseintrags-Buffer des Browsers mit dem angegebenen Namen.
- [`Performance.measure()`](/de/docs/Web/API/Performance/measure)
  - : Erstellt einen benannten [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) im Leistungseintrags-Buffer des Browsers zwischen zwei angegebenen Markierungen (bekannt als _start mark_ und _end mark_ jeweils).
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) {{Experimental_Inline}}
  - : Schätzt die Speichernutzung einer Webanwendung einschließlich aller ihrer iframes und Worker.
- [`Performance.now()`](/de/docs/Web/API/Performance/now)
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, das die Anzahl der Millisekunden darstellt, die seit einem Referenzzeitpunkt vergangen sind.
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
  - : Setzt die Größe des Ressourcen-Timing-Buffers des Browsers auf die angegebene Anzahl von `"resource"` [`type`](/de/docs/Web/API/PerformanceEntry/entryType) [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Objekten.
- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON)
  - : Gibt eine JSON-Darstellung des `Performance` Objekts zurück.

## Ereignisse

Diese Ereignisse können mit `addEventListener()` oder durch Zuweisen eines Ereignis-Listeners zur `oneventname` Eigenschaft dieses Interfaces abgehört werden.

- [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)
  - : Wird ausgelöst, wenn der [Ressourcen-Timing-Buffer](/de/docs/Web/API/Performance/setResourceTimingBufferSize) des Browsers voll ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
