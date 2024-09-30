---
title: "PerformanceNavigationTiming: loadEventEnd-Eigenschaft"
short-title: loadEventEnd
slug: Web/API/PerformanceNavigationTiming/loadEventEnd
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Performance API")}}

Die **`loadEventEnd`**-Eigenschaft gibt ein schreibgeschütztes [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, das die Zeit unmittelbar nach dem Abschluss des [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handlers des aktuellen Dokuments darstellt.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit unmittelbar nach dem Abschluss des [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handlers des aktuellen Dokuments darstellt.

## Beispiele

### Messung der Zeit des `load`-Ereignis-Handlers

Die `loadEventEnd`-Eigenschaft kann verwendet werden, um zu messen, wie lange es dauert, den [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handler zu verarbeiten.

Dies ist nützlich, um die Zeit von langen [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handlern zu messen.

```js
window.addEventListener("load", (event) => {
  // Some long running code
});
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge informiert, sobald sie in der Leistungszeitachse des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitachse des Browsers vorhanden sind:

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
