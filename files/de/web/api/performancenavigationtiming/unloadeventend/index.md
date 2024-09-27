---
title: "PerformanceNavigationTiming: unloadEventEnd-Eigenschaft"
short-title: unloadEventEnd
slug: Web/API/PerformanceNavigationTiming/unloadEventEnd
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Performance API")}}

Die **`unloadEventEnd`** schreibgeschützte Eigenschaft gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt direkt nach der Ausführung des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers des aktuellen Dokuments darstellt.

## Wert

Die `unloadEventEnd`-Eigenschaft kann die folgenden Werte annehmen:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt direkt nach der Ausführung des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers des aktuellen Dokuments darstellt.
- `0`, wenn es kein vorheriges Dokument gibt.
- `0`, wenn die vorherige Seite auf einem anderen Ursprung war.

## Beispiele

### Messung der `unload`-Ereignishandler-Zeit

Die `unloadEventEnd`-Eigenschaft kann verwendet werden, um zu messen, wie lange es dauert, den [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandler zu verarbeiten.

Das ist nützlich, um die Zeit von langlaufenden [`unload`](/de/docs/Web/API/Window/load_event)-Ereignishandlern zu messen.

```js
window.addEventListener("unload", (event) => {
  // Some long running code
});
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge anzeigt, die in der Performance-Zeitleiste des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

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

- [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis
