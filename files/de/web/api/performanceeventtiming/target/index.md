---
title: "PerformanceEventTiming: target-Eigenschaft"
short-title: target
slug: Web/API/PerformanceEventTiming/target
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`target`**-Eigenschaft gibt das letzte zugehörige [`target`](/de/docs/Web/API/Event/target) des Ereignisses zurück. Dabei handelt es sich um den Knoten, auf den das Ereignis zuletzt gesendet wurde.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), auf den das Ereignis zuletzt gesendet wurde.

Oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der `Node` vom DOM-Dokument getrennt ist oder sich im [shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) befindet.

## Beispiele

### Beobachtung von Ereignissen mit einem spezifischen letzten Ziel

Die `target`-Eigenschaft kann verwendet werden, wenn Sie Ereigniszeit-Einträge ([`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)) beobachten. Zum Beispiel, um Ereignisse für ein bestimmtes letztes Ziel zu protokollieren und zu messen.

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
