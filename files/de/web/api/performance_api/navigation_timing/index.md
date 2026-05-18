---
title: Navigation timing
slug: Web/API/Performance_API/Navigation_timing
l10n:
  sourceCommit: 464ec9b1e43bf8a87ffe83abf2832e10739e2fb3
---

{{DefaultAPISidebar("Performance API")}}

Navigation Timing ist Teil der Performance API und liefert Metriken, die mit der Navigation von einer Seite zur anderen verbunden sind. Zum Beispiel können Sie bestimmen, wie lange es dauert, ein Dokument zu laden oder zu entladen, oder die Zeit protokollieren, die benötigt wird, bis die {{Glossary("DOM", "DOM")}}-Konstruktion abgeschlossen ist und die Interaktion mit dem DOM möglich ist.

Nur das aktuelle Dokument wird einbezogen, sodass normalerweise nur ein [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekt zur Beobachtung vorhanden ist. Es erweitert das [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Interface mit dem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"navigation"` und erbt auch von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming), sodass alle Zeitstempel des Vorgangs zum Abrufen des Dokuments ebenfalls verfügbar sind.

{{InheritanceDiagram("PerformanceNavigationTiming")}}

## Navigationszeitstempel

![Zeitstempel-Diagramm, das die Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen eines Dokuments aufgezeichnet wurden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
Abbildung 1. Navigationszeitstempel ([Quelle](https://w3c.github.io/navigation-timing/#process)).

Die Zeitstempel der Dokumentnavigation (zusätzlich zu denen aus [Resource Timing](/de/docs/Web/API/Performance_API/Resource_timing)) sind:

1. [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime): Immer 0.
2. [`unloadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventStart): (wenn ein vorheriges Dokument vorhanden ist) der Zeitstempel unmittelbar bevor der [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandler des aktuellen Dokuments startet.
3. [`unloadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd): (wenn ein vorheriges Dokument vorhanden ist) der Zeitstempel unmittelbar nachdem der [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandler des aktuellen Dokuments abgeschlossen ist.
4. [`domInteractive`](/de/docs/Web/API/PerformanceNavigationTiming/domInteractive): Zeitstempel, wenn die DOM-Konstruktion abgeschlossen ist und die Interaktion damit aus JavaScript möglich ist.
5. [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart): Zeitstempel unmittelbar bevor der [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandler des aktuellen Dokuments startet.
6. [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd): Zeitstempel unmittelbar nachdem der [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandler des aktuellen Dokuments abgeschlossen ist.
7. [`domComplete`](/de/docs/Web/API/PerformanceNavigationTiming/domComplete): Zeitstempel, wenn das Dokument und alle Unterressourcen fertig geladen sind.
8. [`loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart): Zeitstempel unmittelbar bevor der [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler des aktuellen Dokuments startet.
9. [`loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd): Zeitstempel unmittelbar nachdem der [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler des aktuellen Dokuments abgeschlossen ist.

## Leistungszeit-Vertrauen

Die [`PerformanceNavigationTiming.confidence`](/de/docs/Web/API/PerformanceNavigationTiming/confidence)-Eigenschaft gibt ein [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)-Objekt zurück, das Informationen enthält, die anzeigen, ob ein Leistungsdatensatz die typische Anwendungsleistung widerspiegelt oder wahrscheinlich von externen Faktoren beeinflusst wird.

Zum Beispiel, wenn eine Website nach einem "Kaltstart" des Browsers oder einer Sitzungswiederherstellung geladen wurde, können ihre Seiten dadurch langsamer geladen werden. In solchen Fällen würde für einen zugehörigen Leistungsdatensatz ein `low`-Vertrauenswert zurückgegeben. Andererseits, wenn der Browser feststellt, dass ein zurückgegebener Leistungsdatensatz repräsentativ für die typische Anwendungsleistung ist, wird ein `high`-Vertrauenswert zurückgegeben.

Dieses Vertrauensmaß ist für Entwickler nützlich, um zu bestimmen, ob ein Leistungsproblem ein legitimes Anliegen ist oder ob es sich um einen Ausreißer handelt, der durch externe Faktoren verursacht wird. Siehe [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence) für weitere Informationen.

## Andere Eigenschaften

Das [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Interface bietet zusätzliche Eigenschaften wie [`redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount), das die Anzahl der Umleitungen zurückgibt, und [`type`](/de/docs/Web/API/PerformanceNavigationTiming/type), das den Navigationstyp angibt.

## Beispiel

Die Zeitstempel `domContentLoadedEventEnd` und `domContentLoadedEventStart` können verwendet werden, um zu messen, wie lange es dauert, den [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandler zu verarbeiten.

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der den Aufrufer über neue `navigation`-Leistungseinträge benachrichtigt, sobald diese in der Leistungstimeline des Browsers aufgezeichnet werden. Das Beispiel verwendet die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers aufgezeichnet wurden.

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
