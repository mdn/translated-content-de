---
title: "PerformanceNavigationTiming: Eigenschaft loadEventStart"
short-title: loadEventStart
slug: Web/API/PerformanceNavigationTiming/loadEventStart
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`loadEventStart`**-Eigenschaft gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der den Zeitpunkt unmittelbar vor dem Start des derzeitigen [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandlers des Dokuments darstellt.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitpunkt unmittelbar vor dem Start des derzeitigen [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandlers des Dokuments darstellt.

## Beispiele

### Messung der Zeit des `load`-Ereignishandlers

Die Eigenschaft `loadEventStart` kann verwendet werden, um zu messen, wie lange die Verarbeitung des [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandlers dauert.

Dies ist nützlich, um die Zeit von langlaufenden [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandlern zu messen.

```js
window.addEventListener("load", (event) => {
  // Some long running code
});
```

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `navigation`-Leistungseinträge benachrichtigt, sobald sie in der Leistungschronologie des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const loadEventTime = entry.loadEventEnd - entry.loadEventStart;
    if (loadEventTime > 0) {
      console.log(`${entry.name}: load event handler time: ${loadEventTime}ms`);
    }
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, welches nur `navigation`-Leistungseinträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungschronologie des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  const loadEventTime = entry.loadEventEnd - entry.loadEventStart;
  if (loadEventTime > 0) {
    console.log(`${entry.name}:
      load event handler time: ${loadEventTime}ms`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [`load`](/de/docs/Web/API/Window/load_event)-Ereignis
