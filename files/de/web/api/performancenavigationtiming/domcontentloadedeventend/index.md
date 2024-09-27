---
title: "PerformanceNavigationTiming: domContentLoadedEventEnd-Eigenschaft"
short-title: domContentLoadedEventEnd
slug: Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die **`domContentLoadedEventEnd`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurückgibt, der den Zeitpunkt unmittelbar nach Abschluss des `DOMContentLoaded`-Eventhandlers des aktuellen Dokuments darstellt.

Typischerweise warten Frameworks und Bibliotheken auf das `DOMContentLoaded`-Ereignis, bevor sie ihren Code ausführen. Wir können die Eigenschaften `domContentLoadedEventEnd` und [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) verwenden, um zu berechnen, wie lange das Ausführen dauert.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar nach Abschluss des `DOMContentLoaded`-Eventhandlers des aktuellen Dokuments darstellt.

## Beispiele

### Messung der Zeit des `DOMContentLoaded`-Eventhandlers

Die `domContentLoadedEventEnd`-Eigenschaft kann verwendet werden, um zu messen, wie lange die Verarbeitung des `DOMContentLoaded`-Eventhandlers dauert.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge anzeigt, die in der Performance-Zeitleiste des Browsers zum Zeitpunkt des Aufrufs dieser Methode vorhanden sind:

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
