---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
l10n:
  sourceCommit: 9e2a695c5f63663505eb6d11a3f5d238c8182187
---

{{APIRef("Performance API")}}

Die **`PerformanceNavigationTiming`**-Schnittstelle bietet Methoden und Eigenschaften zum Speichern und Abrufen von Metriken im Zusammenhang mit den Navigationsevents des Browsers. Zum Beispiel kann diese Schnittstelle verwendet werden, um festzustellen, wie lange das Laden oder Entladen eines Dokuments dauert.

Nur das aktuelle Dokument ist in der Performance-Zeitleiste enthalten, daher gibt es nur ein `PerformanceNavigationTiming`-Objekt in der Zeitleiste. Es erbt alle Eigenschaften und Methoden von {{domxref("PerformanceResourceTiming")}} und {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

Das folgende Diagramm zeigt alle Zeitstempelfunktionen, die in `PerformanceNavigationTiming` definiert sind.

![Zeitstempeldiagramm, das Zeitstempel in der Reihenfolge zeigt, in der sie für das Abrufen eines Dokuments aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden {{domxref('PerformanceEntry')}}-Eigenschaften, indem sie sie wie folgt qualifiziert und einschränkt:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : Gibt `"navigation"` zurück.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : Gibt die [URL des Dokuments](/de/docs/Web/API/Document/URL) zurück.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("DOMHighResTimeStamp")}} mit einem Wert von "`0`" zurück.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("DOMHighResTimeStamp","timestamp")}} zurück, das die Differenz zwischen den Eigenschaften {{domxref("PerformanceNavigationTiming.loadEventEnd")}} und {{domxref("PerformanceEntry.startTime")}} ist.

Diese Schnittstelle erweitert auch die folgenden {{domxref('PerformanceResourceTiming')}}-Eigenschaften, indem sie sie wie folgt qualifiziert und einschränkt:

- {{domxref('PerformanceResourceTiming.initiatorType')}} {{ReadOnlyInline}}
  - : Gibt `"navigation"` zurück.

Die Schnittstelle unterstützt auch die folgenden Eigenschaften:

- {{domxref('PerformanceNavigationTiming.activationStart')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit zwischen dem Beginn des Prerenderings eines Dokuments und seiner Aktivierung darstellt.
- {{domxref('PerformanceNavigationTiming.criticalCHRestart')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit repräsentiert, zu der der Verbindungsneustart aufgrund von {{HTTPHeader("Critical-CH")}} HTTP-Header-Unstimmigkeiten erfolgt ist.
- {{domxref('PerformanceNavigationTiming.domComplete')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit direkt bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"complete"` setzt, darstellt.
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventEnd')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit direkt nach Abschluss des Event-Handlers für das aktuelle [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) -Ereignis darstellt.
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventStart')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit direkt bevor der Event-Handler für das aktuelle [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) -Ereignis beginnt, darstellt.
- {{domxref('PerformanceNavigationTiming.domInteractive')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit direkt bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"interactive"` setzt, darstellt.
- {{domxref('PerformanceNavigationTiming.loadEventEnd')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit direkt nach Abschluss des Event-Handlers für das aktuelle [`load`](/de/docs/Web/API/Window/load_event) -Ereignis darstellt.
- {{domxref('PerformanceNavigationTiming.loadEventStart')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit direkt bevor der Event-Handler für das aktuelle [`load`](/de/docs/Web/API/Window/load_event) -Ereignis beginnt, darstellt.
- {{domxref('PerformanceNavigationTiming.notRestoredReasons')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("NotRestoredReasons")}}-Objekt, das Berichtsdaten zu den Gründen liefert, warum das aktuelle Dokument daran gehindert wurde, den Vor-/Zurücksicherungscache ({{Glossary("bfcache")}}) bei der Navigation zu verwenden.
- {{domxref('PerformanceNavigationTiming.redirectCount')}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Anzahl der Umleitungen seit der letzten Nicht-Umleitungsnavigation im aktuellen Browsing-Kontext darstellt.
- {{domxref('PerformanceNavigationTiming.type')}} {{ReadOnlyInline}}
  - : Ein String, der den Navigationstyp darstellt. Entweder `"navigate"`, `"reload"`, `"back_forward"` oder `"prerender"`.
- {{domxref('PerformanceNavigationTiming.unloadEventEnd')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit direkt nach Abschluss des Event-Handlers für das aktuelle [`unload`](/de/docs/Web/API/Window/unload_event) -Ereignis darstellt.
- {{domxref('PerformanceNavigationTiming.unloadEventStart')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit direkt bevor der Event-Handler für das aktuelle [`unload`](/de/docs/Web/API/Window/unload_event) -Ereignis beginnt, darstellt.

## Instanz-Methoden

- {{domxref("PerformanceNavigationTiming.toJSON()")}}
  - : Gibt eine JSON-Darstellung des `PerformanceNavigationTiming`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Performance.navigation")}}
- {{domxref("PerformanceNavigation")}}
