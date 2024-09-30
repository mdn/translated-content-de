---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Das **`PerformanceNavigationTiming`** Interface bietet Methoden und Eigenschaften, um Metriken hinsichtlich der Navigationsereignisse des Browsers zu speichern und abzurufen. Zum Beispiel kann dieses Interface verwendet werden, um zu bestimmen, wie viel Zeit es benötigt, um ein Dokument zu laden oder zu entladen.

Nur das aktuelle Dokument ist in der Performance-Zeitleiste enthalten, daher gibt es nur ein `PerformanceNavigationTiming`-Objekt in der Performance-Zeitleiste. Es erbt alle Eigenschaften und Methoden von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

Das folgende Diagramm zeigt alle Zeitstempel-Eigenschaften, die in `PerformanceNavigationTiming` definiert sind.

![Zeitstempeldiagramm, das die Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen eines Dokuments aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem es diese qualifiziert und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"navigation"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die [URL des Dokuments](/de/docs/Web/API/Document/URL) zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit dem Wert `0` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) darstellt.

Dieses Interface erweitert auch die folgenden [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Eigenschaften, indem es diese qualifiziert und einschränkt:

- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Gibt `"navigation"` zurück.

Das Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit zwischen dem Beginn des Prerenderings eines Dokuments und dem Zeitpunkt seiner Aktivierung darstellt.
- [`PerformanceNavigationTiming.criticalCHRestart`](/de/docs/Web/API/PerformanceNavigationTiming/criticalCHRestart) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit darstellt, zu der der Verbindungsneustart aufgrund einer {{HTTPHeader("Critical-CH")}}-HTTP-Response-Header-Abweichung erfolgte.
- [`PerformanceNavigationTiming.domComplete`](/de/docs/Web/API/PerformanceNavigationTiming/domComplete) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit unmittelbar bevor der Benutzeragent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"complete"` setzt, darstellt.
- [`PerformanceNavigationTiming.domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit unmittelbar nach dem Abschluss des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit unmittelbar bevor der [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandler des aktuellen Dokuments startet, darstellt.
- [`PerformanceNavigationTiming.domInteractive`](/de/docs/Web/API/PerformanceNavigationTiming/domInteractive) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit unmittelbar bevor der Benutzeragent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"interactive"` setzt, darstellt.
- [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit unmittelbar nach dem Abschluss des [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit unmittelbar bevor der [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler des aktuellen Dokuments startet, darstellt.
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt, das Berichtsdaten zu den Gründen liefert, warum das aktuelle Dokument von der Nutzung des Back/Forward Caches ([bfcache](/de/docs/Glossary/bfcache)) bei der Navigation ausgeschlossen wurde.
- [`PerformanceNavigationTiming.redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount) {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Umleitungen seit der letzten Nicht-Umleitungs-Navigation im aktuellen Browsing-Kontext darstellt.
- [`PerformanceNavigationTiming.type`](/de/docs/Web/API/PerformanceNavigationTiming/type) {{ReadOnlyInline}}
  - : Ein String, der den Navigationstyp darstellt. Entweder `"navigate"`, `"reload"`, `"back_forward"` oder `"prerender"`.
- [`PerformanceNavigationTiming.unloadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit unmittelbar nach dem Abschluss des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.unloadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit unmittelbar bevor der [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandler des aktuellen Dokuments startet, darstellt.

## Instanz-Methoden

- [`PerformanceNavigationTiming.toJSON()`](/de/docs/Web/API/PerformanceNavigationTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceNavigationTiming`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.navigation`](/de/docs/Web/API/Performance/navigation)
- [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)
