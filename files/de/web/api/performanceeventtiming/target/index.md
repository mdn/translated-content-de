---
title: "PerformanceEventTiming: target-Eigenschaft"
short-title: target
slug: Web/API/PerformanceEventTiming/target
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`target`**-Eigenschaft gibt das letzte mit dem Ereignis verbundene [`target`](/de/docs/Web/API/Event/target) zurück, welches der Knoten ist, auf den das Ereignis zuletzt übermittelt wurde.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), auf den das Ereignis zuletzt übermittelt wurde.

Oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der `Node` von der DOM-Dokumentstruktur getrennt oder im [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) befindet.

## Beispiele

### Beobachten von Ereignissen mit einem spezifischen letzten Ziel

Die `target`-Eigenschaft kann verwendet werden, wenn man Einträge der Ereigniszeitmessungen ([`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)) beobachtet. Zum Beispiel, um Ereignisse für ein bestimmtes letztes Ziel zu protokollieren und zu messen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.target && entry.target.id === "myNode") {
      const delay = entry.processingStart - entry.startTime;
      console.log(entry.name, delay);
    }
  });
});

// Register the observer for events
observer.observe({ type: "event", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
