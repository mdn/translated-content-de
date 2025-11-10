---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{APIRef("Performance API")}}

Das **`PerformanceNavigationTiming`** Interface bietet Methoden und Eigenschaften, um Metriken in Bezug auf die Dokumentennavigationsereignisse des Browsers zu speichern und abzurufen. Dieses Interface kann beispielsweise verwendet werden, um zu bestimmen, wie lange es dauert, ein Dokument zu laden oder zu entladen.

Nur das aktuelle Dokument ist in der Performance-Timeline enthalten, sodass es nur ein `PerformanceNavigationTiming`-Objekt in der Performance-Timeline gibt. Es erbt alle Eigenschaften und Methoden von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

Das folgende Diagramm zeigt alle Zeitstempel-Eigenschaften, die in `PerformanceNavigationTiming` definiert sind.

![Zeitstempel-Diagramm, das Zeitstempel in der Reihenfolge, in der sie für das Abrufen eines Dokuments aufgezeichnet werden, auflistet](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

## Instanzeigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften, indem es sie wie folgt qualifiziert und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"navigation"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die [URL des Dokuments](/de/docs/Web/API/Document/URL) zurück.
    Beachten Sie, dass [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) und andere Fragmentanweisungen von der URL entfernt werden.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit dem Wert `0` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) darstellt.

Dieses Interface erweitert auch die folgenden [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Eigenschaften, indem es sie wie folgt qualifiziert und einschränkt:

- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Gibt `"navigation"` zurück.

Das Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit zwischen dem Start des Vorerstellens eines Dokuments und dessen Aktivierung darstellt.
- [`PerformanceNavigationTiming.criticalCHRestart`](/de/docs/Web/API/PerformanceNavigationTiming/criticalCHRestart) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der aufgrund eines {{HTTPHeader("Critical-CH")}} HTTP-Header-Mismatch ein Verbindungsneustart stattfand.
- [`PerformanceNavigationTiming.domComplete`](/de/docs/Web/API/PerformanceNavigationTiming/domComplete) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"complete"` setzt, darstellt.
- [`PerformanceNavigationTiming.domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach dem Abschluss des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignishandlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignishandler des aktuellen Dokuments startet, darstellt.
- [`PerformanceNavigationTiming.domInteractive`](/de/docs/Web/API/PerformanceNavigationTiming/domInteractive) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"interactive"` setzt, darstellt.
- [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach dem Abschluss des [`load`](/de/docs/Web/API/Window/load_event) Ereignishandlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der [`load`](/de/docs/Web/API/Window/load_event) Ereignishandler des aktuellen Dokuments startet, darstellt.
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons) Objekt, das Berichts-Daten zu den Gründen bereitstellt, warum das aktuelle Dokument daran gehindert wurde, den Rückwärts/Vorwärts-Cache ({{Glossary("bfcache", "bfcache")}}) bei der Navigation zu verwenden.
- [`PerformanceNavigationTiming.redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount) {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Umleitungen seit der letzten Nicht-Umleitungsnavigation im aktuellen Browsing-Kontext darstellt.
- [`PerformanceNavigationTiming.type`](/de/docs/Web/API/PerformanceNavigationTiming/type) {{ReadOnlyInline}}
  - : Ein String, der den Navigationstyp darstellt. Entweder `"navigate"`, `"reload"` oder `"back_forward"`.
- [`PerformanceNavigationTiming.unloadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach dem Abschluss des [`unload`](/de/docs/Web/API/Window/unload_event) Ereignishandlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.unloadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der [`unload`](/de/docs/Web/API/Window/unload_event) Ereignishandler des aktuellen Dokuments startet, darstellt.

## Instanzmethoden

- [`PerformanceNavigationTiming.toJSON()`](/de/docs/Web/API/PerformanceNavigationTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceNavigationTiming` Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.navigation`](/de/docs/Web/API/Performance/navigation)
- [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)
