---
title: Leistung
slug: Web/API/Performance
l10n:
  sourceCommit: 9548e8228e0872c244e3a0622ed0448139995ad6
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das **`Performance`**-Interface bietet Zugriff auf leistungsbezogene Informationen für die aktuelle Seite.

Leistungseinträge sind spezifisch für jeden Ausführungskontext. Sie können Leistungsinformationen für Code, der in einem Fenster läuft, über [`Window.performance`](/de/docs/Web/API/Window/performance) abrufen und für Code, der in einem Worker läuft, über [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `Performance`-Interface erbt keine Eigenschaften._

- [`Performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) {{ReadOnlyInline}}
  - : Eine [`EventCounts`](/de/docs/Web/API/EventCounts)-Map, die die Anzahl der pro Ereignistyp ausgelösten Ereignisse enthält.
- [`Performance.interactionCount`](/de/docs/Web/API/Performance/interactionCount) {{ReadOnlyInline}}
  - : Die Anzahl der echten Benutzerinteraktionen, die auf der Seite stattgefunden haben, was nützlich ist, um {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}} zu berechnen.
- [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein veraltetes [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)-Objekt, das nützliche Kontexte zu den in `timing` aufgeführten Zeiten bietet, beispielsweise ob die Seite geladen oder aktualisiert wurde, wie viele Weiterleitungen stattgefunden haben usw.
- [`Performance.timing`](/de/docs/Web/API/Performance/timing) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein veraltetes [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Objekt, das leistungsbezogene Latenzinformationen enthält.
- [`Performance.memory`](/de/docs/Web/API/Performance/memory) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Eine _nicht-standardisierte_ Erweiterung, die in Chrome hinzugefügt wurde. Diese Eigenschaft bietet ein Objekt mit grundlegenden Informationen zur Speichernutzung. _Sie \*\*sollten diese nicht-standardisierte API nicht verwenden._
- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) {{ReadOnlyInline}}
  - : Gibt den hochaufgelösten Zeitstempel des Startzeitpunkts der Leistungsbewertung zurück.

## Instanz-Methoden

_Das `Performance`-Interface erbt keine Methoden._

- [`Performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks)
  - : Entfernt das angegebene _Mark_ aus dem Leistungsdatenpuffer des Browsers.
- [`Performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures)
  - : Entfernt das angegebene _Measure_ aus dem Leistungsdatenpuffer des Browsers.
- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)
  - : Entfernt alle [Leistungseinträge](/de/docs/Web/API/PerformanceEntry) mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"resource"` aus dem Leistungsdatenpuffer des Browsers.
- [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten basierend auf dem angegebenen _Filter_ zurück.
- [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten basierend auf dem angegebenen _Namen_ und _Eintragstyp_ zurück.
- [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten des angegebenen _Eintragstyps_ zurück.
- [`Performance.mark()`](/de/docs/Web/API/Performance/mark)
  - : Erstellt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) im _Leistungseintragspuffer_ des Browsers mit dem gegebenen Namen.
- [`Performance.measure()`](/de/docs/Web/API/Performance/measure)
  - : Erstellt einen benannten [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) im Leistungseintragspuffer des Browsers zwischen zwei angegebenen Marken (bekannt als _Startmarke_ und _Endmarke_).
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) {{Experimental_Inline}}
  - : Schätzt die Speichernutzung einer Webanwendung einschließlich all ihrer iframes und Worker.
- [`Performance.now()`](/de/docs/Web/API/Performance/now)
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Anzahl der Millisekunden darstellt, die seit einem Referenzpunkt vergangen sind.
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
  - : Legt die `resource`-Timing-Puffergröße des Browsers auf die angegebene Anzahl von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten fest.
- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON)
  - : Gibt eine JSON-Darstellung des `Performance`-Objekts zurück.

## Ereignisse

Verwenden Sie `addEventListener()`, um diese Ereignisse zu hören, oder weisen Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zu.

- [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)
  - : Wird ausgelöst, wenn der [Ressourcentiming-Puffer](/de/docs/Web/API/Performance/setResourceTimingBufferSize) des Browsers voll ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
