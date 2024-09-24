---
title: "PerformanceNavigationTiming: Eigenschaft domContentLoadedEventStart"
short-title: domContentLoadedEventStart
slug: Web/API/PerformanceNavigationTiming/domContentLoadedEventStart
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die **`domContentLoadedEventStart`** schreibgeschützte Eigenschaft gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit unmittelbar vor dem Beginn des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandlers des aktuellen Dokuments darstellt.

Typischerweise warten Frameworks und Bibliotheken auf das `DOMContentLoaded`-Ereignis, bevor sie ihren Code ausführen. Wir können die Eigenschaften `domContentLoadedEventStart` und [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd) verwenden, um zu berechnen, wie lange es dauert, diesen Code auszuführen.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit unmittelbar vor dem Beginn des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandlers des aktuellen Dokuments darstellt.

## Beispiele

### Messung der Zeit des `DOMContentLoaded`-Ereignishandlers

Die `domContentLoadedEventStart`-Eigenschaft kann verwendet werden, um zu messen, wie lange es dauert, den [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignishandler zu verarbeiten.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `navigation`-Performance-Einträge benachrichtigt, wie sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `navigation`-Performance-Einträge anzeigt, die in der Performance-Zeitachse des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

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
