---
title: Leistung
slug: Web/API/Performance
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Performance API")}}

Das **`Performance`**-Interface bietet Zugriff auf leistungsbezogene Informationen für die aktuelle Seite.

Leistungseinträge sind spezifisch für jeden Ausführungskontext. Sie können Leistungsinformationen für Code abrufen, der in einem Fenster läuft, über {{domxref("Window.performance")}} und für Code, der in einem Worker läuft, über {{domxref("WorkerGlobalScope.performance")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `Performance`-Interface erbt keine Eigenschaften._

- {{domxref("Performance.eventCounts")}} {{ReadOnlyInline}}

  - : Eine {{domxref("EventCounts")}} Karte, die die Anzahl der Ereignisse enthält, die pro Ereignistyp ausgelöst wurden.

- {{domxref("Performance.navigation")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein veraltetes {{domxref("PerformanceNavigation")}}-Objekt, das nützlichen Kontext über die in den in `timing` aufgeführten Zeiten enthaltenen Vorgänge bietet, einschließlich ob die Seite geladen oder aktualisiert wurde, wie viele Weiterleitungen erfolgt sind, und so weiter.

- {{domxref("Performance.timing")}} {{ReadOnlyInline}} {{Deprecated_Inline}}

  - : Ein veraltetes {{domxref("PerformanceTiming")}}-Objekt, das Informationen zur latenzbezogenen Leistung enthält.

- {{domxref("Performance.memory")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Eine _nicht standardisierte_ Erweiterung in Chrome, diese Eigenschaft bietet ein Objekt mit grundlegenden Informationen zur Speichernutzung. _Sie **sollten diese nicht standardisierte API nicht verwenden._
- {{domxref("Performance.timeOrigin")}} {{ReadOnlyInline}}
  - : Gibt den hochauflösenden Zeitstempel der Startzeit der Leistungsbewertung zurück.

## Instanz-Methoden

_Das `Performance`-Interface erbt keine Methoden._

- {{domxref("Performance.clearMarks()")}}
  - : Entfernt das angegebene _Mark_ aus dem Leistungseintrags-Puffer des Browsers.
- {{domxref("Performance.clearMeasures()")}}
  - : Entfernt das angegebene _Measure_ aus dem Leistungseintrags-Puffer des Browsers.
- {{domxref("Performance.clearResourceTimings()")}}
  - : Entfernt alle [Leistungseinträge](/de/docs/Web/API/PerformanceEntry) mit einem {{domxref("PerformanceEntry.entryType","entryType")}} von "`resource`" aus dem Leistungsdaten-Puffer des Browsers.
- {{domxref("Performance.getEntries()")}}
  - : Gibt eine Liste von {{domxref("PerformanceEntry")}}-Objekten basierend auf dem angegebenen _Filter_ zurück.
- {{domxref("Performance.getEntriesByName()")}}
  - : Gibt eine Liste von {{domxref("PerformanceEntry")}}-Objekten basierend auf dem angegebenen _Name_ und _Entry Type_ zurück.
- {{domxref("Performance.getEntriesByType()")}}
  - : Gibt eine Liste von {{domxref("PerformanceEntry")}}-Objekten des angegebenen _Entry Type_ zurück.
- {{domxref("Performance.mark()")}}
  - : Erstellt einen {{domxref("DOMHighResTimeStamp","Zeitstempel")}} im _Leistungseintrags-Puffer_ des Browsers mit dem angegebenen Namen.
- {{domxref("Performance.measure()")}}
  - : Erstellt einen benannten {{domxref("DOMHighResTimeStamp","Zeitstempel")}} im Leistungseintrags-Puffer des Browsers zwischen zwei angegebenen Marks (bekannt als _Startmarke_ und _Endmarke_).
- {{domxref("Performance.measureUserAgentSpecificMemory()")}} {{Experimental_Inline}}
  - : Schätzt den Speicherverbrauch einer Webanwendung einschließlich aller iFrames und Worker.
- {{domxref("Performance.now()")}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die verstrichene Millisekundenzahl seit einem Referenzpunkt darstellt.
- {{domxref("Performance.setResourceTimingBufferSize()")}}
  - : Setzt die Ressourcentimings-Puffergröße des Browsers auf die angegebene Anzahl von "`resource`" {{domxref("PerformanceEntry.entryType","Type")}} {{domxref("PerformanceEntry")}}-Objekten.
- {{domxref("Performance.toJSON()")}}
  - : Gibt eine JSON-Darstellung des `Performance`-Objekts zurück.

## Ereignisse

Diese Ereignisse können mit `addEventListener()` abgehört werden oder indem ein Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zugewiesen wird.

- {{DOMxRef("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
  - : Wird ausgelöst, wenn der [Resource Timing Buffer](/de/docs/Web/API/Performance/setResourceTimingBufferSize) des Browsers voll ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
