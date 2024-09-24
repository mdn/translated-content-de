---
title: "PerformanceNavigationTiming: unloadEventEnd-Eigenschaft"
short-title: unloadEventEnd
slug: Web/API/PerformanceNavigationTiming/unloadEventEnd
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Performance API")}}

Die **`unloadEventEnd`** schreibgeschützte Eigenschaft gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der den Zeitpunkt unmittelbar nach dem Abschluss des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers des aktuellen Dokuments darstellt.

## Wert

Die Eigenschaft `unloadEventEnd` kann folgende Werte haben:

- Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitpunkt unmittelbar nach dem Abschluss des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers des aktuellen Dokuments darstellt.
- `0`, wenn es kein vorheriges Dokument gibt.
- `0`, wenn die vorherige Seite auf einem anderen Ursprung war.

## Beispiele

### Messung der `unload`-Ereignishandler-Zeit

Die Eigenschaft `unloadEventEnd` kann verwendet werden, um zu messen, wie lange die Bearbeitung des [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandlers dauert.

Dies ist nützlich, um die Zeit lang laufender [`unload`](/de/docs/Web/API/Window/load_event)-Ereignishandler zu messen.

```js
window.addEventListener("unload", (event) => {
  // Einige lang laufende Code
});
```

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `navigation`-Performance-Einträge benachrichtigt, sobald sie in der Leistungszeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `navigation`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitleiste des Browsers vorhanden sind:

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
