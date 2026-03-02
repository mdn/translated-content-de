---
title: "PerformanceNavigationTiming: unloadEventStart-Eigenschaft"
short-title: unloadEventStart
slug: Web/API/PerformanceNavigationTiming/unloadEventStart
l10n:
  sourceCommit: 62708f419bc2b77535822fd9f9b0fd0912fd2014
---

{{APIRef("Performance API")}}

Die **`unloadEventStart`** schreibgeschützte Eigenschaft gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, das die Zeit unmittelbar vor dem Start des Ereignis-Handlers [`unload`](/de/docs/Web/API/Window/unload_event) des vorherigen Dokuments darstellt.

## Wert

Die `unloadEventStart`-Eigenschaft kann folgende Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar vor dem Beginn des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis-Handlers des vorherigen Dokuments darstellt.
- `0`, falls es kein vorheriges Dokument gibt.
- `0`, wenn die vorherige Seite aus einer anderen Herkunft stammt.

## Beispiele

### Messen der Zeit des `unload`-Ereignis-Handlers

Die `unloadEventStart`-Eigenschaft kann genutzt werden, um die Dauer des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis-Handlers zu messen.

Dies ist nützlich, um die Zeit von lang andauernden [`unload`](/de/docs/Web/API/Window/load_event)-Ereignis-Handlers zu messen.

```js
window.addEventListener("unload", (event) => {
  // Some long running code
});
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge informiert, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge zeigt, die in der Performance-Zeitleiste des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  const unloadEventTime = entry.unloadEventEnd - entry.unloadEventStart;
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
