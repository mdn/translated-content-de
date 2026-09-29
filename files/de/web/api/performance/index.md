---
title: Performance
slug: Web/API/Performance
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`Performance`**-Schnittstelle ermöglicht den Zugriff auf leistungsbezogene Informationen zur aktuellen Seite.

Performance-Einträge sind jeweils einem Ausführungskontext zugeordnet. Über [`Window.performance`](/de/docs/Web/API/Window/performance) können Sie Leistungsinformationen für Code abrufen, der in einem Fenster ausgeführt wird, und über [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance) für Code, der in einem Worker ausgeführt wird.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Die `Performance`-Schnittstelle erbt keine Eigenschaften._

- [`Performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) {{ReadOnlyInline}}
  - : Eine [`EventCounts`](/de/docs/Web/API/EventCounts)-Map mit der Anzahl der ausgelösten Events pro Event-Typ.
- [`Performance.interactionCount`](/de/docs/Web/API/Performance/interactionCount) {{ReadOnlyInline}}
  - : Die Anzahl der tatsächlichen Benutzerinteraktionen auf der Seite. Dieser Wert ist für die Berechnung von {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}} hilfreich.
- [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein veraltetes [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)-Objekt, das nützliche Kontextinformationen zu den Vorgängen liefert, deren Zeiten in `timing` aufgeführt sind. Dazu gehört, ob die Seite geladen oder aktualisiert wurde, wie viele Weiterleitungen stattfanden und mehr.
- [`Performance.timing`](/de/docs/Web/API/Performance/timing) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein veraltetes [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Objekt mit leistungsbezogenen Informationen zu Latenzzeiten.
- [`Performance.memory`](/de/docs/Web/API/Performance/memory) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Diese in Chrome hinzugefügte _nicht standardisierte_ Erweiterung stellt ein Objekt mit grundlegenden Informationen zur Speichernutzung bereit. _Sie sollten diese nicht standardisierte API **nicht verwenden**._
- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) {{ReadOnlyInline}}
  - : Gibt den hochauflösenden Zeitstempel für den Beginn der Leistungsmessung zurück.

## Instanzmethoden

_Die `Performance`-Schnittstelle erbt keine Methoden._

- [`Performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks)
  - : Entfernt die angegebene _Markierung_ aus dem Puffer für Performance-Einträge des Browsers.
- [`Performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures)
  - : Entfernt die angegebene _Messung_ aus dem Puffer für Performance-Einträge des Browsers.
- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)
  - : Entfernt alle [Performance-Einträge](/de/docs/Web/API/PerformanceEntry) mit dem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) `"resource"` aus dem Puffer für Leistungsdaten des Browsers.
- [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten anhand des angegebenen _Filters_ zurück.
- [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten anhand des angegebenen _Namens_ und _Eintragstyps_ zurück.
- [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten des angegebenen _Eintragstyps_ zurück.
- [`Performance.mark()`](/de/docs/Web/API/Performance/mark)
  - : Erstellt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) mit dem angegebenen Namen im _Puffer für Performance-Einträge_ des Browsers.
- [`Performance.measure()`](/de/docs/Web/API/Performance/measure)
  - : Erstellt einen benannten [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) im Puffer für Performance-Einträge des Browsers zwischen zwei angegebenen Markierungen (der _Startmarkierung_ und der _Endmarkierung_).
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) {{Experimental_Inline}}
  - : Schätzt die Speichernutzung einer Webanwendung einschließlich aller ihrer iframes und Worker.
- [`Performance.now()`](/de/docs/Web/API/Performance/now)
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die seit einem Referenzzeitpunkt verstrichenen Millisekunden angibt.
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
  - : Legt die Größe des Ressourcen-Timing-Puffers des Browsers auf die angegebene Anzahl von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten mit dem [`type`](/de/docs/Web/API/PerformanceEntry/entryType) `"resource"` fest.
- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `Performance`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Events

Sie können diese Events mit `addEventListener()` überwachen oder der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen.

- [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)
  - : Wird ausgelöst, wenn der [Ressourcen-Timing-Puffer](/de/docs/Web/API/Performance/setResourceTimingBufferSize) des Browsers voll ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
