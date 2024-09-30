---
title: "PerformanceNavigationTiming: domContentLoadedEventEnd-Eigenschaft"
short-title: domContentLoadedEventEnd
slug: Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`domContentLoadedEventEnd`** gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt unmittelbar nach Abschluss des Event-Handlers des aktuellen Dokuments für das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis darstellt.

Typischerweise warten Frameworks und Bibliotheken auf das `DOMContentLoaded`-Ereignis, bevor sie ihren Code ausführen. Wir können die `domContentLoadedEventEnd`- und die [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart)-Eigenschaften verwenden, um zu berechnen, wie lange die Ausführung dauert.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar nach Abschluss des Event-Handlers des aktuellen Dokuments für das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis darstellt.

## Beispiele

### Messung der Dauer des `DOMContentLoaded`-Event-Handlings

Die `domContentLoadedEventEnd`-Eigenschaft kann verwendet werden, um zu messen, wie lange die Verarbeitung des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Event-Handlers dauert.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der benachrichtigt wird, wenn neue `navigation`-Leistungseinträge in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Beobachters zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Leistungseinträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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
