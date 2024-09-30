---
title: Navigation timing
slug: Web/API/Performance_API/Navigation_timing
l10n:
  sourceCommit: 6af9224dbbd5263ffa46dd63e742cd2471e46f95
---

{{DefaultAPISidebar("Performance API")}}

Navigation Timing ist ein Teil der Performance API und bietet Metriken, die mit dem Navigieren von einer Seite zur anderen verbunden sind. Zum Beispiel können Sie bestimmen, wie viel Zeit das Laden oder Entladen eines Dokuments in Anspruch nimmt oder die Zeit protokollieren, die verging, bis die [DOM](/de/docs/Glossary/DOM)-Konstruktion abgeschlossen ist und die Interaktion mit dem DOM möglich ist.

Nur das aktuelle Dokument wird berücksichtigt, daher gibt es normalerweise nur ein [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekt zu beobachten. Es erweitert die [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Schnittstelle mit dem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"navigation"` und erbt auch von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming), sodass alle Zeitstempel aus dem Prozess des Abrufens des Dokuments ebenfalls verfügbar sind.

{{InheritanceDiagram("PerformanceNavigationTiming")}}

## Navigations-Zeitstempel

![Diagramm der Zeitstempel, das die Zeitstempel in der Reihenfolge anzeigt, in der sie für das Abrufen eines Dokuments aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
Abbildung 1. Navigations-Zeitstempel ([Quelle](https://w3c.github.io/navigation-timing/#process)).

Die Dokument-Navigations-Zeitstempel (zusätzlich zu denen von [Resource Timing](/de/docs/Web/API/Performance_API/Resource_timing)) sind:

1. [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime): Immer 0.
2. [`unloadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventStart): (wenn es ein vorheriges Dokument gibt) der Zeitstempel unmittelbar bevor der [`unload`](/de/docs/Web/API/Window/unload_event) Event-Handler des aktuellen Dokuments startet.
3. [`unloadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd): (wenn es ein vorheriges Dokument gibt) der Zeitstempel unmittelbar nachdem der [`unload`](/de/docs/Web/API/Window/unload_event) Event-Handler des aktuellen Dokuments abgeschlossen wurde.
4. [`domInteractive`](/de/docs/Web/API/PerformanceNavigationTiming/domInteractive): Zeitstempel, wenn die DOM-Konstruktion abgeschlossen ist und die Interaktion damit aus JavaScript möglich ist.
5. [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart): Zeitstempel unmittelbar bevor der [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Event-Handler des aktuellen Dokuments startet.
6. [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd): Zeitstempel unmittelbar nachdem der [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Event-Handler des aktuellen Dokuments abgeschlossen wurde.
7. [`domComplete`](/de/docs/Web/API/PerformanceNavigationTiming/domComplete): Zeitstempel, wenn das Dokument und alle Unterressourcen das Laden abgeschlossen haben.
8. [`loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart): Zeitstempel unmittelbar bevor der [`load`](/de/docs/Web/API/Window/load_event) Event-Handler des aktuellen Dokuments startet.
9. [`loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd): Zeitstempel unmittelbar nachdem der [`load`](/de/docs/Web/API/Window/load_event) Event-Handler des aktuellen Dokuments abgeschlossen wurde.

## Andere Eigenschaften

Die Schnittstelle [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) bietet zusätzliche Eigenschaften wie [`redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount), die die Anzahl der Weiterleitungen zurückgibt, und [`type`](/de/docs/Web/API/PerformanceNavigationTiming/type), die den Navigationstyp angibt.

## Beispiel

Die Zeitstempel `domContentLoadedEventEnd` und `domContentLoadedEventStart` können verwendet werden, um zu messen, wie lange die Verarbeitung des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Event-Handlers dauert.

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der den Aufrufer über neue `navigation`-Performance-Einträge informiert, während sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Das Beispiel verwendet die `buffered`-Option, um auf Einträge zuzugreifen, die aufgezeichnet wurden, bevor der Beobachter erstellt wurde.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const domContentLoadedTime =
      entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
    console.log(
      `${entry.name}: DOMContentLoaded processing time: ${domContentLoadedTime}ms`,
    );
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Für weitere Beispiele sehen Sie sich die Eigenschaftsseiten in der [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Referenzdokumentation an.

## Siehe auch

- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
