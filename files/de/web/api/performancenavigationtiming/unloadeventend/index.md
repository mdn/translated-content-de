---
title: "PerformanceNavigationTiming: unloadEventEnd-Eigenschaft"
short-title: unloadEventEnd
slug: Web/API/PerformanceNavigationTiming/unloadEventEnd
l10n:
  sourceCommit: 851e147a0f38b5a3e48efd9d4aedc6e27b7ed254
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`unloadEventEnd`** gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt unmittelbar nach der Ausführung des `unload`-Ereignis-Handlers des vorherigen Dokuments darstellt.

## Wert

Die Eigenschaft `unloadEventEnd` kann die folgenden Werte haben:

- Einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar nach dem Abschluss des `unload`-Ereignis-Handlers des vorherigen Dokuments darstellt.
- `0`, wenn es kein vorheriges Dokument gibt.
- `0`, wenn die vorherige Seite auf einer anderen Herkunft war.

## Beispiele

### Messung der Zeit des `unload`-Ereignis-Handlers

Die `unloadEventEnd`-Eigenschaft kann verwendet werden, um zu messen, wie lange die Verarbeitung des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis-Handlers dauert.

Dies ist nützlich, um die Zeit lang andauernder [`unload`](/de/docs/Web/API/Window/load_event)-Ereignis-Handler zu messen.

```js
window.addEventListener("unload", (event) => {
  // Some long running code
});
```

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur die `navigation`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

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
