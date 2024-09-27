---
title: Navigation timing
slug: Web/API/Performance_API/Navigation_timing
l10n:
  sourceCommit: 6af9224dbbd5263ffa46dd63e742cd2471e46f95
---

{{DefaultAPISidebar("Performance API")}}

Navigation Timing ist Teil der Performance API und liefert Metriken, die mit der Navigation von einer Seite zur anderen verbunden sind. Beispielsweise können Sie ermitteln, wie viel Zeit das Laden oder Entladen eines Dokuments in Anspruch nimmt oder die Zeit protokollieren, die bis zur Fertigstellung der [DOM](/de/docs/Glossary/DOM)-Konstruktion verging, sodass eine Interaktion mit dem DOM möglich ist.

Nur das aktuelle Dokument wird einbezogen, daher gibt es in der Regel nur ein [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekt zu beobachten. Es erweitert die [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Schnittstelle mit dem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"navigation"` und erbt auch von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming), sodass alle Zeitstempel aus dem Prozess des Abrufens des Dokuments ebenfalls verfügbar sind.

{{InheritanceDiagram("PerformanceNavigationTiming")}}

## Navigationszeitstempel

![Zeitstempeldiagramm, das die Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen eines Dokuments aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
Abbildung 1. Navigationszeitstempel ([Quelle](https://w3c.github.io/navigation-timing/#process)).

Die Navigationszeitstempel des Dokuments (zusätzlich zu denen aus [Resource Timing](/de/docs/Web/API/Performance_API/Resource_timing)) sind:

1. [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime): Immer 0.
2. [`unloadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventStart): (falls ein vorheriges Dokument existiert) der Zeitstempel unmittelbar bevor der [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandler des aktuellen Dokuments startet.
3. [`unloadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd): (falls ein vorheriges Dokument existiert) der Zeitstempel unmittelbar nachdem der [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandler des aktuellen Dokuments abgeschlossen ist.
4. [`domInteractive`](/de/docs/Web/API/PerformanceNavigationTiming/domInteractive): Zeitstempel, wenn die DOM-Konstruktion abgeschlossen ist und eine Interaktion mit JavaScript möglich ist.
5. [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart): Zeitstempel unmittelbar bevor der [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandler des aktuellen Dokuments startet.
6. [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd): Zeitstempel unmittelbar nachdem der [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandler des aktuellen Dokuments abgeschlossen ist.
7. [`domComplete`](/de/docs/Web/API/PerformanceNavigationTiming/domComplete): Zeitstempel, wenn das Dokument und alle Subressourcen vollständig geladen sind.
8. [`loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart): Zeitstempel unmittelbar bevor der [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler des aktuellen Dokuments startet.
9. [`loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd): Zeitstempel unmittelbar nachdem der [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler des aktuellen Dokuments abgeschlossen ist.

## Andere Eigenschaften

Die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle bietet zusätzliche Eigenschaften wie [`redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount), die die Anzahl der Umleitungen zurückgibt, und [`type`](/de/docs/Web/API/PerformanceNavigationTiming/type), die den Typ der Navigation angibt.

## Beispiel

Die `domContentLoadedEventEnd`- und `domContentLoadedEventStart`-Zeitstempel können verwendet werden, um zu messen, wie lange es dauert, den [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandler zu verarbeiten.

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der den Aufrufer über neue `navigation`-Performance-Einträge informiert, sobald diese in der Leistungstimeline des Browsers aufgezeichnet werden. Das Beispiel verwendet die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers aufgezeichnet wurden.

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

Weitere Beispiele finden Sie auf den Eigenschaftsseiten in der [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Referenzdokumentation.

## Siehe auch

- [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
