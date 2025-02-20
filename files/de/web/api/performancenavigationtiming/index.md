---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("Performance API")}}

Das **`PerformanceNavigationTiming`**-Interface bietet Methoden und Eigenschaften, um Metriken in Bezug auf die Navigationsereignisse des Browsers zu speichern und abzurufen. Dieses Interface kann beispielsweise verwendet werden, um zu ermitteln, wie viel Zeit für das Laden oder Entladen eines Dokuments benötigt wird.

Nur das aktuelle Dokument ist in der Performance-Timeline enthalten, daher gibt es nur ein `PerformanceNavigationTiming`-Objekt in der Performance-Timeline. Es erbt alle Eigenschaften und Methoden von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) und [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

Das folgende Diagramm zeigt alle Zeitstempel-Eigenschaften, die in `PerformanceNavigationTiming` definiert sind.

![Zeitstempel-Diagramm, das die Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen eines Dokuments aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

## Instanzeigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem sie qualifiziert und eingeschränkt werden:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"navigation"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die [URL des Dokuments](/de/docs/Web/API/Document/URL) zurück.
    Beachten Sie, dass [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) und andere Fragment-Direktiven aus der URL entfernt werden.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit einem Wert von `0` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) darstellt.

Dieses Interface erweitert auch die folgenden [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Eigenschaften, indem sie qualifiziert und eingeschränkt werden:

- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Gibt `"navigation"` zurück.

Das Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceNavigationTiming.activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit zwischen dem Beginn des Prerenderings eines Dokuments und seiner Aktivierung angibt.
- [`PerformanceNavigationTiming.criticalCHRestart`](/de/docs/Web/API/PerformanceNavigationTiming/criticalCHRestart) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt des Verbindungsneustarts aufgrund eines {{HTTPHeader("Critical-CH")}}-HTTP-Response-Header-Mismatches angibt.
- [`PerformanceNavigationTiming.domComplete`](/de/docs/Web/API/PerformanceNavigationTiming/domComplete) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor der Änderung des [`readyState`](/de/docs/Web/API/Document/readyState)-Wertes des Dokuments auf `"complete"` durch den User-Agent darstellt.
- [`PerformanceNavigationTiming.domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach der Ausführung des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor der Ausführung des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.domInteractive`](/de/docs/Web/API/PerformanceNavigationTiming/domInteractive) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor der Änderung des [`readyState`](/de/docs/Web/API/Document/readyState)-Wertes des Dokuments auf `"interactive"` durch den User-Agent darstellt.
- [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach der Ausführung des [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor der Ausführung des [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekt, das Berichts-Daten über die Gründe enthält, warum das aktuelle Dokument daran gehindert wurde, den Rückwärts/Vorwärts-Cache ({{Glossary("bfcache", "bfcache")}}) bei der Navigation zu verwenden.
- [`PerformanceNavigationTiming.redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount) {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Weiterleitungen seit der letzten Nicht-Weiterleitungs-Navigation im aktuellen Browsing-Kontext darstellt.
- [`PerformanceNavigationTiming.type`](/de/docs/Web/API/PerformanceNavigationTiming/type) {{ReadOnlyInline}}
  - : Ein String, der den Navigationstyp darstellt. Entweder `"navigate"`, `"reload"`, `"back_forward"` oder `"prerender"`.
- [`PerformanceNavigationTiming.unloadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach der Ausführung des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers des aktuellen Dokuments darstellt.
- [`PerformanceNavigationTiming.unloadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor der Ausführung des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers des aktuellen Dokuments darstellt.

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
