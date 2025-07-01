---
title: "PerformanceNavigationTiming: unloadEventStart-Eigenschaft"
short-title: unloadEventStart
slug: Web/API/PerformanceNavigationTiming/unloadEventStart
l10n:
  sourceCommit: 851e147a0f38b5a3e48efd9d4aedc6e27b7ed254
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`unloadEventStart`**-Eigenschaft gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit unmittelbar vor dem Start des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers des vorherigen Dokuments darstellt.

## Wert

Die `unloadEventStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor dem Start des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers des vorherigen Dokuments darstellt.
- `0`, wenn es kein vorheriges Dokument gibt.
- `0`, wenn die vorherige Seite von einer anderen Herkunft stammt.

## Beispiele

### Zeitmessung des `unload`-Ereignishandlers

Die `unloadEventStart`-Eigenschaft kann verwendet werden, um zu messen, wie lange die Verarbeitung des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers dauert.

Dies ist nützlich, um die Zeit von lang andauernden [`unload`](/de/docs/Web/API/Window/load_event)-Ereignishandlern zu messen.

```js
window.addEventListener("unload", (event) => {
  // Some long running code
});
```

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), die nur `navigation`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

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
