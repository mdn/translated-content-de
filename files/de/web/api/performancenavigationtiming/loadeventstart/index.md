---
title: "PerformanceNavigationTiming: loadEventStart-Eigenschaft"
short-title: loadEventStart
slug: Web/API/PerformanceNavigationTiming/loadEventStart
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Performance API")}}

Die **`loadEventStart`** schreibgeschützte Eigenschaft gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit unmittelbar vor dem Start des [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandlers des aktuellen Dokuments darstellt.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor dem Start des [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandlers des aktuellen Dokuments darstellt.

## Beispiele

### Messung der `load`-Ereignishandlerzeit

Die `loadEventStart`-Eigenschaft kann verwendet werden, um zu messen, wie lange es dauert, den [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler zu verarbeiten.

Dies ist nützlich, um die Zeit von lang andauernden [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandlern zu messen.

```js
window.addEventListener("load", (event) => {
  // Some long running code
});
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`load`](/de/docs/Web/API/Window/load_event)-Ereignis
