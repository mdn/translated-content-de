---
title: "PerformanceNavigationTiming: domContentLoadedEventEnd-Eigenschaft"
short-title: domContentLoadedEventEnd
slug: Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`domContentLoadedEventEnd`** gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit unmittelbar nach dem Abschluss des Event-Handlers des aktuellen Dokuments für [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) darstellt.

Typischerweise warten Frameworks und Bibliotheken auf das `DOMContentLoaded`-Ereignis, bevor sie ihren Code ausführen. Wir können die Eigenschaften `domContentLoadedEventEnd` und [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) verwenden, um zu berechnen, wie lange diese Ausführung dauert.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit unmittelbar nach dem Abschluss des Event-Handlers des aktuellen Dokuments für [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) darstellt.

## Beispiele

### Messung der Bearbeitungszeit des `DOMContentLoaded`-Event-Handlers

Die `domContentLoadedEventEnd`-Eigenschaft kann verwendet werden, um zu messen, wie lange die Bearbeitung des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Event-Handlers dauert.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `navigation`-Performance-Einträge benachrichtigt, während sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `navigation`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  const domContentLoadedTime =
    entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
  console.log(
    `${entry.name}: DOMContentLoaded processing time: ${domContentLoadedTime}ms`,
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)
