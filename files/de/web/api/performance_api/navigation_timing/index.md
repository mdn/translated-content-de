---
title: Navigationstiming
slug: Web/API/Performance_API/Navigation_timing
l10n:
  sourceCommit: 6af9224dbbd5263ffa46dd63e742cd2471e46f95
---

{{DefaultAPISidebar("Performance API")}}

Navigation Timing ist Teil der Performance API und bietet Metriken, die mit der Navigation von einer Seite zur anderen verbunden sind. Zum Beispiel können Sie bestimmen, wie viel Zeit das Laden oder Entladen eines Dokuments in Anspruch nimmt, oder die Zeit erfassen, die bis zur Fertigstellung der {{Glossary("DOM")}}-Konstruktion und zur Möglichkeit der Interaktion mit dem DOM verstrichen ist.

Nur das aktuelle Dokument wird berücksichtigt, daher gibt es normalerweise nur ein {{domxref("PerformanceNavigationTiming")}}-Objekt zu beobachten. Es erweitert die {{domxref("PerformanceEntry")}}-Schnittstelle mit dem {{domxref("PerformanceEntry.entryType","entryType")}} von `"navigation"` und erbt auch von {{domxref("PerformanceResourceTiming")}}, sodass alle Zeitstempel des Prozesses zum Abrufen des Dokuments ebenfalls verfügbar sind.

{{InheritanceDiagram("PerformanceNavigationTiming")}}

## Navigationszeitstempel

![Zeitstempeldiagramm, das die Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen eines Dokuments aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
Abbildung 1. Navigationszeitstempel ([Quelle](https://w3c.github.io/navigation-timing/#process)).

Die Zeitstempel der Dokumentennavigation (zusätzlich zu denen von [Resource Timing](/de/docs/Web/API/Performance_API/Resource_timing)) sind:

1. {{domxref("PerformanceEntry.startTime","startTime")}}: Immer 0.
2. {{domxref("PerformanceNavigationTiming.unloadEventStart","unloadEventStart")}}: (falls es ein vorheriges Dokument gibt) der Zeitstempel unmittelbar bevor der [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandler des aktuellen Dokuments beginnt.
3. {{domxref("PerformanceNavigationTiming.unloadEventEnd","unloadEventEnd")}}: (falls es ein vorheriges Dokument gibt) der Zeitstempel unmittelbar nachdem der [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandler des aktuellen Dokuments abgeschlossen ist.
4. {{domxref("PerformanceNavigationTiming.domInteractive","domInteractive")}}: Zeitpunkt, an dem die DOM-Konstruktion abgeschlossen ist und die Interaktion mit ihm aus JavaScript möglich ist.
5. {{domxref("PerformanceNavigationTiming.domContentLoadedEventStart","domContentLoadedEventStart")}}: Zeitstempel unmittelbar bevor der [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandler des aktuellen Dokuments beginnt.
6. {{domxref("PerformanceNavigationTiming.domContentLoadedEventEnd","domContentLoadedEventEnd")}}: Zeitstempel unmittelbar nachdem der [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandler des aktuellen Dokuments abgeschlossen ist.
7. {{domxref("PerformanceNavigationTiming.domComplete","domComplete")}}: Zeitpunkt, an dem das Dokument und alle zugehörigen Ressourcen das Laden abgeschlossen haben.
8. {{domxref("PerformanceNavigationTiming.loadEventStart","loadEventStart")}}: Zeitstempel unmittelbar bevor der [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler des aktuellen Dokuments beginnt.
9. {{domxref("PerformanceNavigationTiming.loadEventEnd","loadEventEnd")}}: Zeitstempel unmittelbar nachdem der [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler des aktuellen Dokuments abgeschlossen ist.

## Weitere Eigenschaften

Die {{domxref("PerformanceNavigationTiming")}}-Schnittstelle bietet zusätzliche Eigenschaften wie {{domxref("PerformanceNavigationTiming.redirectCount","redirectCount")}}, die die Anzahl der Umleitungen zurückgibt, und {{domxref("PerformanceNavigationTiming.type","type")}}, die den Typ der Navigation angibt.

## Beispiel

Die Zeitstempel `domContentLoadedEventEnd` und `domContentLoadedEventStart` können verwendet werden, um zu messen, wie lange es dauert, den [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandler zu verarbeiten.

Dieses Beispiel verwendet einen {{domxref("PerformanceObserver")}}, der den Aufrufer über neue `navigation`-Performance-Einträge benachrichtigt, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Das Beispiel verwendet die `buffered`-Option, um auf Einträge zuzugreifen, die aufgezeichnet wurden, bevor der Beobachter erstellt wurde.

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

Weitere Beispiele finden Sie auf den Eigenschaftsseiten in der {{domxref("PerformanceNavigationTiming")}}-Referenzdokumentation.

## Siehe auch

- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}}
