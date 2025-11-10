---
title: Performance
slug: Web/API/Performance
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`Performance`**-Schnittstelle bietet Zugriff auf leistungsbezogene Informationen für die aktuelle Seite.

Performance-Einträge sind spezifisch für jeden Ausführungskontext. Sie können Leistungsinformationen für Code, der in einem Fenster ausgeführt wird, über [`Window.performance`](/de/docs/Web/API/Window/performance) und für Code, der in einem Worker ausgeführt wird, über [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance) abrufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `Performance`-Schnittstelle erbt keine Eigenschaften._

- [`Performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) {{ReadOnlyInline}}
  - : Eine [`EventCounts`](/de/docs/Web/API/EventCounts)-Karte, die die Anzahl der pro Ereignistyp versandten Ereignisse enthält.

- [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein veraltetes [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)-Objekt, das nützlichen Kontext zu den in `timing` aufgeführten Zeiten bietet, einschließlich Informationen darüber, ob die Seite geladen oder aktualisiert wurde, wie viele Weiterleitungen auftraten und so weiter.

- [`Performance.timing`](/de/docs/Web/API/Performance/timing) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein veraltetes [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Objekt, das leistungsbezogene Informationen über Latenzzeiten enthält.

- [`Performance.memory`](/de/docs/Web/API/Performance/memory) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Eine _nicht standardisierte_ Erweiterung, die in Chrome hinzugefügt wurde. Diese Eigenschaft bietet ein Objekt mit grundlegenden Informationen zur Speichernutzung. _Sie \*\*sollten diese nicht standardisierte API nicht verwenden._
- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) {{ReadOnlyInline}}
  - : Gibt den hochauflösenden Zeitstempel des Startzeitpunkts der Leistungsüberwachung zurück.

## Instanz-Methoden

_Die `Performance`-Schnittstelle erbt keine Methoden._

- [`Performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks)
  - : Entfernt das angegebene _Markierung_ aus dem Performance-Eintrags-Puffer des Browsers.
- [`Performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures)
  - : Entfernt das angegebene _Messung_ aus dem Performance-Eintrags-Puffer des Browsers.
- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)
  - : Entfernt alle [Performance-Einträge](/de/docs/Web/API/PerformanceEntry) mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"resource"` aus dem Leistungsdaten-Puffer des Browsers.
- [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten basierend auf dem angegebenen _Filter_ zurück.
- [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten basierend auf dem angegebenen _Namen_ und _Eintragstyp_ zurück.
- [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten des angegebenen _Eintragstyps_ zurück.
- [`Performance.mark()`](/de/docs/Web/API/Performance/mark)
  - : Erstellt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) im _Performance-Eintrags-Puffer_ des Browsers mit dem angegebenen Namen.
- [`Performance.measure()`](/de/docs/Web/API/Performance/measure)
  - : Erstellt einen benannten [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) im Performance-Eintrags-Puffer des Browsers zwischen zwei angegebenen Markierungen (bekannt als _Startmarkierung_ und _Endmarkierung_).
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) {{Experimental_Inline}}
  - : Schätzt die Speichernutzung einer Webanwendung einschließlich aller ihrer iframes und Worker.
- [`Performance.now()`](/de/docs/Web/API/Performance/now)
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Anzahl der Millisekunden seit einem Referenzzeitpunkt darstellt.
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
  - : Legt die Größe des Ressourcen-Timing-Puffers des Browsers auf die angegebene Anzahl von `"resource"`-[`type`](/de/docs/Web/API/PerformanceEntry/entryType)-[`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten fest.
- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON)
  - : Gibt eine JSON-Darstellung des `Performance`-Objekts zurück.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignislisteners an die `oneventname`-Eigenschaft dieser Schnittstelle ab.

- [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)
  - : Wird ausgelöst, wenn der [Ressourcen-Timing-Puffer](/de/docs/Web/API/Performance/setResourceTimingBufferSize) des Browsers voll ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
