---
title: "PerformanceNavigationTiming: unloadEventStart-Eigenschaft"
short-title: unloadEventStart
slug: Web/API/PerformanceNavigationTiming/unloadEventStart
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Performance API")}}

Die **`unloadEventStart`**-Eigenschaft gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt unmittelbar vor dem Beginn des [`unload`](/de/docs/Web/API/Window/unload_event)-Event-Handlers des aktuellen Dokuments darstellt.

## Wert

Die `unloadEventStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar vor dem Beginn des [`unload`](/de/docs/Web/API/Window/unload_event)-Event-Handlers des aktuellen Dokuments darstellt.
- `0`, wenn es kein vorheriges Dokument gibt.
- `0`, wenn die vorherige Seite auf einem anderen Ursprung war.

## Beispiele

### Messung der Zeit des `unload`-Event-Handlers

Die `unloadEventStart`-Eigenschaft kann verwendet werden, um zu messen, wie lange es dauert, den [`unload`](/de/docs/Web/API/Window/unload_event)-Event-Handler zu verarbeiten.

Dies ist nützlich, um die Dauer von lang laufenden [`unload`](/de/docs/Web/API/Window/load_event)-Event-Handlern zu messen.

```js
window.addEventListener("unload", (event) => {
  // Some long running code
});
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge informiert, wenn sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const unloadEventTime = entry.unloadEventEnd - entry.unloadEventStart;
    if (unloadEventTime > 0) {
      console.log(
        `${entry.name}: unload event handler time: ${unloadEventTime}ms`,
      );
    }
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  const loadEventTime = entry.unloadEventEnd - entry.unloadEventStart;
  if (unloadEventTime > 0) {
    console.log(`${entry.name}:
      load event handler time: ${unloadEventTime}ms`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`unload`](/de/docs/Web/API/Window/unload_event) Ereignis
