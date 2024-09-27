---
title: "PerformanceNavigationTiming: loadEventEnd-Eigenschaft"
short-title: loadEventEnd
slug: Web/API/PerformanceNavigationTiming/loadEventEnd
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`loadEventEnd`** gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit unmittelbar nach Abschluss des [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handlers des aktuellen Dokuments darstellt.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach Abschluss des [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handlers des aktuellen Dokuments darstellt.

## Beispiele

### Messung der `load`-Ereignis-Handler-Zeit

Die `loadEventEnd`-Eigenschaft kann verwendet werden, um zu messen, wie lange es dauert, um den [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handler zu verarbeiten.

Dies ist nützlich, um die Zeit von lang laufenden [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handlern zu messen.

```js
window.addEventListener("load", (event) => {
  // Some long running code
});
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Leistungseinträge benachrichtigt, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellerstellung zuzugreifen.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), welches nur die `navigation`-Leistungseinträge zeigt, die im Leistungstimeline des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

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

- [`load`](/de/docs/Web/API/Window/load_event) Ereignis
