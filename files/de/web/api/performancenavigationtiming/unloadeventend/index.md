---
title: "PerformanceNavigationTiming: Eigenschaft unloadEventEnd"
short-title: unloadEventEnd
slug: Web/API/PerformanceNavigationTiming/unloadEventEnd
l10n:
  sourceCommit: c7460aab1397829c109a88e3a58fed9b7ef9c0c5
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`unloadEventEnd`** gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt unmittelbar nach dem Abschluss des Event-Handlers für das [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis des vorherigen Dokuments darstellt.

## Wert

Die Eigenschaft `unloadEventEnd` kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar nach dem Abschluss des Event-Handlers für das [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis des vorherigen Dokuments darstellt.
- `0`, wenn kein vorheriges Dokument vorhanden ist.
- `0`, wenn die vorherige Seite von einem anderen Origin stammt.

## Beispiele

### Messen der Ausführungszeit des `unload`-Event-Handlers

Die Eigenschaft `unloadEventEnd` kann verwendet werden, um zu messen, wie lange die Verarbeitung des Event-Handlers für das [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis dauert.

Dies ist nützlich, um die Ausführungszeit von lang laufenden Event-Handlern für das [`unload`](/de/docs/Web/API/Window/load_event)-Ereignis zu messen.

```js
window.addEventListener("unload", (event) => {
  // Some long running code
});
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge informiert, sobald sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

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
