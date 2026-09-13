---
title: "PerformanceNavigationTiming: loadEventEnd-Eigenschaft"
short-title: loadEventEnd
slug: Web/API/PerformanceNavigationTiming/loadEventEnd
l10n:
  sourceCommit: c7460aab1397829c109a88e3a58fed9b7ef9c0c5
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`loadEventEnd`** gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt unmittelbar nach Abschluss des Ereignishandlers für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des aktuellen Dokuments darstellt.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar nach Abschluss des Ereignishandlers für das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des aktuellen Dokuments darstellt.

## Beispiele

### Verarbeitungszeit des `load`-Ereignishandlers messen

Die Eigenschaft `loadEventEnd` kann verwendet werden, um zu messen, wie lange die Verarbeitung des [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandlers dauert.

Dies ist nützlich, um die Dauer lang laufender [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler zu messen.

```js
window.addEventListener("load", (event) => {
  // Some long running code
});
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge informiert, sobald diese in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

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
