---
title: "PerformanceNavigationTiming: loadEventStart-Eigenschaft"
short-title: loadEventStart
slug: Web/API/PerformanceNavigationTiming/loadEventStart
l10n:
  sourceCommit: c7460aab1397829c109a88e3a58fed9b7ef9c0c5
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`loadEventStart`** gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt unmittelbar vor dem Start des Event-Handlers für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des aktuellen Dokuments darstellt.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar vor dem Start des Event-Handlers für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des aktuellen Dokuments darstellt.

## Beispiele

### Verarbeitungszeit des `load`-Event-Handlers messen

Die Eigenschaft `loadEventStart` kann verwendet werden, um zu messen, wie lange die Verarbeitung des Event-Handlers für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis dauert.

Dies ist nützlich, um die Dauer lang laufender Event-Handler für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis zu messen.

```js
window.addEventListener("load", (event) => {
  // Some long running code
});
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge benachrichtigt, sobald diese in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge anzeigt, die sich zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers befinden:

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
