---
title: "PerformanceNavigationTiming: Eigenschaft unloadEventStart"
short-title: unloadEventStart
slug: Web/API/PerformanceNavigationTiming/unloadEventStart
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Performance API")}}

Die **`unloadEventStart`**-Eigenschaft (nur lesbar) gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit unmittelbar vor dem Start des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers des aktuellen Dokuments darstellt.

## Wert

Die `unloadEventStart`-Eigenschaft kann folgende Werte annehmen:

- Einen {{domxref("DOMHighResTimeStamp")}}, der die Zeit unmittelbar vor dem Start des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers des aktuellen Dokuments darstellt.
- `0`, wenn es kein vorheriges Dokument gibt.
- `0`, wenn die vorherige Seite von einem anderen Ursprung stammt.

## Beispiele

### Messen der Zeit des `unload`-Ereignishandlers

Die `unloadEventStart`-Eigenschaft kann verwendet werden, um zu messen, wie lange die Verarbeitung des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers dauert.

Dies ist nützlich, um die Zeit von langlaufenden [`unload`](/de/docs/Web/API/Window/load_event)-Ereignishandlern zu messen.

```js
window.addEventListener("unload", (event) => {
  // Some long running code
});
```

Beispiel mit einem {{domxref("PerformanceObserver")}}, der benachrichtigt, wenn neue `navigation`-Performance-Einträge im Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `navigation`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

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
