---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
l10n:
  sourceCommit: 464ec9b1e43bf8a87ffe83abf2832e10739e2fb3
---

{{APIRef("Performance API")}}

Das **`PerformanceNavigationTiming`**-Interface bietet Methoden und Eigenschaften, um Metriken in Bezug auf die Navigationsereignisse des Browsers zu speichern und abzurufen. Zum Beispiel kann dieses Interface verwendet werden, um zu bestimmen, wie viel Zeit das Laden oder Entladen eines Dokuments benötigt.

Nur das aktuelle Dokument ist in der Leistungstimeline enthalten, daher gibt es nur ein `PerformanceNavigationTiming`-Objekt in der Leistungstimeline. Es erbt alle Eigenschaften und Methoden von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

Das folgende Diagramm zeigt alle Zeitstempel-Eigenschaften, die in `PerformanceNavigationTiming` definiert sind.

![Zeitstempel-Diagramm, das die Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen eines Dokuments aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

## Instanzeigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem es sie wie folgt qualifiziert und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"navigation"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die [URL des Dokuments](/de/docs/Web/API/Document/URL) zurück. Beachten Sie, dass [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) und andere Fragment-Direktiven aus der URL entfernt werden.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit einem Wert von `0` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) ist.

Dieses Interface erweitert auch die folgenden [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Eigenschaften, indem es sie wie folgt qualifiziert und einschränkt:

- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Gibt `"navigation"` zurück.

Das Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit zwischen dem Start des Vor-Renderings eines Dokuments und dessen Aktivierung darstellt.
- [`PerformanceNavigationTiming.confidence`](/de/docs/Web/API/PerformanceNavigationTiming/confidence) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)-Objekt, das Informationen enthält, die anzeigen, ob ein Leistungsbericht die typische Anwendungsleistung widerspiegelt oder wahrscheinlich durch externe Faktoren beeinflusst wird.
- [`PerformanceNavigationTiming.criticalCHRestart`](/de/docs/Web/API/PerformanceNavigationTiming/criticalCHRestart) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der der Verbindungsneustart aufgrund einer {{HTTPHeader("Critical-CH")}} HTTP-Antwortkopfzeilen-Mismatch auftrat.
- [`PerformanceNavigationTiming.domComplete`](/de/docs/Web/API/PerformanceNavigationTiming/domComplete) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor dem Setzen des [`readyState`](/de/docs/Web/API/Document/readyState)-Zustands des Dokuments auf `"complete"` durch den Benutzeragenten darstellt.
- [`PerformanceNavigationTiming.domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach dem Abschluss des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis-Handlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor dem Start des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis-Handlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.domInteractive`](/de/docs/Web/API/PerformanceNavigationTiming/domInteractive) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor dem Setzen des [`readyState`](/de/docs/Web/API/Document/readyState)-Zustands des Dokuments auf `"interactive"` durch den Benutzeragenten darstellt.
- [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach dem Abschluss des [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor dem Start des [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt, das Daten über die Gründe liefert, warum das aktuelle Dokument an der Verwendung des Rückwärts/Vorwärts-Caches ({{Glossary("bfcache", "bfcache")}}) bei der Navigation gehindert wurde.
- [`PerformanceNavigationTiming.redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount) {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Umleitungen seit der letzten Nicht-Umleitungs-Navigation im aktuellen Browsing-Kontext darstellt.
- [`PerformanceNavigationTiming.type`](/de/docs/Web/API/PerformanceNavigationTiming/type) {{ReadOnlyInline}}
  - : Ein String, der den Navigationstyp darstellt. Entweder `"navigate"`, `"reload"` oder `"back_forward"`.
- [`PerformanceNavigationTiming.unloadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach dem Abschluss des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis-Handlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.unloadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor dem Start des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis-Handlers des aktuellen Dokuments darstellt.

## Instanzmethoden

- [`PerformanceNavigationTiming.toJSON()`](/de/docs/Web/API/PerformanceNavigationTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceNavigationTiming`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.navigation`](/de/docs/Web/API/Performance/navigation)
- [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)
