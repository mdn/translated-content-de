---
title: Performance
slug: Web/API/Performance
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Das **`Performance`**-Interface bietet Zugriff auf leistungsbezogene Informationen für die aktuelle Seite.

Performance-Einträge sind für jeden Ausführungskontext spezifisch. Sie können Leistungsinformationen für Code, der in einem Fenster läuft, über [`Window.performance`](/de/docs/Web/API/Window/performance) und für Code, der in einem Worker läuft, über [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance) abrufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `Performance`-Interface erbt keine Eigenschaften._

- [`Performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts) {{ReadOnlyInline}}

  - : Eine [`EventCounts`](/de/docs/Web/API/EventCounts)-Karte, die die Anzahl der pro Ereignistyp ausgelösten Ereignisse enthält.

- [`Performance.navigation`](/de/docs/Web/API/Performance/navigation) {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein veraltetes [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)-Objekt, das nützlichen Kontext über die in `timing` aufgeführten Vorgänge bereitstellt, einschließlich ob die Seite geladen oder aktualisiert wurde, wie viele Umleitungen stattgefunden haben usw.

- [`Performance.timing`](/de/docs/Web/API/Performance/timing) {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein veraltetes [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Objekt, das latenzbezogene Leistungsinformationen enthält.

- [`Performance.memory`](/de/docs/Web/API/Performance/memory) {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Eine _nicht-standardisierte_ Erweiterung, die in Chrome hinzugefügt wurde und ein Objekt mit grundlegenden Speichernutzungsinformationen bereitstellt. _Sie \*\*sollten diese nicht-standardisierte API nicht verwenden._
- [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) {{ReadOnlyInline}}
  - : Gibt den hochauflösenden Zeitstempel der Startzeit der Leistungsbewertung zurück.

## Instanz-Methoden

_Das `Performance`-Interface erbt keine Methoden._

- [`Performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks)
  - : Entfernt die angegebene _Markierung_ aus dem Leistungsdatenpuffer des Browsers.
- [`Performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures)
  - : Entfernt das angegebene _Maß_ aus dem Leistungsdatenpuffer des Browsers.
- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)
  - : Entfernt alle [Leistungseinträge](/de/docs/Web/API/PerformanceEntry) mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"resource"` aus dem Leistungsdatenpuffer des Browsers.
- [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten basierend auf dem angegebenen _Filter_ zurück.
- [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten basierend auf dem angegebenen _Namen_ und _Eintragstyp_ zurück.
- [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)
  - : Gibt eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten des angegebenen _Eintragstyps_ zurück.
- [`Performance.mark()`](/de/docs/Web/API/Performance/mark)
  - : Erstellt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) im _Leistungseinträgepuffer_ des Browsers mit dem angegebenen Namen.
- [`Performance.measure()`](/de/docs/Web/API/Performance/measure)
  - : Erstellt einen benannten [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) im Leistungseinträgepuffer des Browsers zwischen zwei angegebenen Markierungen (bekannt als _Startmarke_ und _Endmarke_).
- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory) {{Experimental_Inline}}
  - : Schätzt die Speichernutzung einer Webanwendung, einschließlich aller iframes und Worker.
- [`Performance.now()`](/de/docs/Web/API/Performance/now)
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Anzahl der Millisekunden angibt, die seit einem Referenzzeitpunkt verstrichen sind.
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
  - : Legt die Größe des Ressourcentiming-Puffers des Browsers auf die angegebene Anzahl von `"resource"` [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-[`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten fest.
- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON)
  - : Gibt eine JSON-Darstellung des `Performance`-Objekts zurück.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignis-Listeners zur Eigenschaft `oneventname` dieses Interfaces.

- [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)
  - : Wird ausgelöst, wenn der [Ressourcentiming-Puffer](/de/docs/Web/API/Performance/setResourceTimingBufferSize) des Browsers voll ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
