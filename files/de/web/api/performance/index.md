---
title: Performance
slug: Web/API/Performance
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das **`Performance`** Interface bietet Zugriff auf leistungsbezogene Informationen für die aktuelle Seite.

Performance-Einträge sind spezifisch für jeden Ausführungskontext. Sie können Leistungsinformationen für Code abrufen, der in einem Fenster ausgeführt wird, über [`Window.performance`](/de/docs/Web/API/Window/performance) und für Code, der in einem Worker ausgeführt wird, über [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance).

{{InheritanceDiagram}}

## Instanzattribute

_Das `Performance` Interface erbt keine Attribute._

- [`Performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) {{ReadOnlyInline}}

  - : Eine [`EventCounts`](/de/docs/Web/API/EventCounts) Karte, die die Anzahl der Ereignisse enthält, die pro Ereignistyp ausgelöst wurden.

- [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein veraltetes [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation) Objekt, das nützliche Informationen zu den in `timing` aufgeführten Vorgängen bietet, einschließlich ob die Seite geladen oder aktualisiert wurde, wie viele Weiterleitungen erfolgt sind und so weiter.

- [`Performance.timing`](/de/docs/Web/API/Performance/timing) {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein veraltetes [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Objekt, das latenzbezogene Leistungsinformationen enthält.

- [`Performance.memory`](/de/docs/Web/API/Performance/memory) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Eine _nicht standardisierte_ Erweiterung in Chrome, diese Eigenschaft liefert ein Objekt mit grundlegenden Speicherverbrauchsinformationen. _Sie **sollten** diese nicht standardisierte API **nicht verwenden**._
- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) {{ReadOnlyInline}}
  - : Gibt den hochauflösenden Zeitstempel der Startzeit der Leistungsüberwachung zurück.

## Instanzmethoden

_Das `Performance` Interface erbt keine Methoden._

- [`Performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks)
  - : Entfernt das angegebene _Mark_ aus dem Leistungseintrags-Puffer des Browsers.
- [`Performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures)
  - : Entfernt das angegebene _Measure_ aus dem Leistungseintrags-Puffer des Browsers.
- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)
  - : Entfernt alle [Leistungseinträge](/de/docs/Web/API/PerformanceEntry) mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"resource"` aus dem Leistungsdatenpuffer des Browsers.
- [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Objekten basierend auf dem angegebenen _Filter_ zurück.
- [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Objekten basierend auf dem angegebenen _Namen_ und _Eintragstyp_ zurück.
- [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Objekten des angegebenen _Eintragstyps_ zurück.
- [`Performance.mark()`](/de/docs/Web/API/Performance/mark)
  - : Erstellt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) im _Leistungseintrags-Puffer_ des Browsers mit dem angegebenen Namen.
- [`Performance.measure()`](/de/docs/Web/API/Performance/measure)
  - : Erstellt einen benannten [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) im Leistungseintrags-Puffer des Browsers zwischen zwei angegebenen Marken (bekannt als Startmarkierung und Endmarkierung).
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) {{Experimental_Inline}}
  - : Schätzt den Speicherverbrauch einer Web-Anwendung einschließlich aller ihrer Iframes und Worker.
- [`Performance.now()`](/de/docs/Web/API/Performance/now)
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Anzahl der Millisekunden darstellt, die seit einem Referenzzeitpunkt vergangen sind.
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
  - : Legt die Ressourcen-Timing-Puffergröße des Browsers auf die angegebene Anzahl von `"resource"` [`type`](/de/docs/Web/API/PerformanceEntry/entryType) [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Objekten fest.
- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON)
  - : Gibt eine JSON-Darstellung des `Performance` Objekts zurück.

## Ereignisse

Diese Ereignisse können mit `addEventListener()` oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces überwacht werden.

- [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)
  - : Wird ausgelöst, wenn der [Ressourcen-Timing-Puffer](/de/docs/Web/API/Performance/setResourceTimingBufferSize) des Browsers voll ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
