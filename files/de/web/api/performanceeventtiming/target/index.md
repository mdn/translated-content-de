---
title: "PerformanceEventTiming: Eigenschaft target"
short-title: target
slug: Web/API/PerformanceEventTiming/target
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`target`**-Eigenschaft gibt das zuletzt mit dem zugehörigen Ereignis verknüpfte [`target`](/de/docs/Web/API/Event/target) zurück, das der Knoten ist, auf den das Ereignis zuletzt ausgelöst wurde.

## Wert

Ein {{domxref("Node")}}, auf den das Ereignis zuletzt ausgelöst wurde.

Oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der `Node` von der DOM-Dokumentenstruktur getrennt ist oder im [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) ist.

## Beispiele

### Beobachtung von Ereignissen mit einem bestimmten letzten Ziel

Die `target`-Eigenschaft kann verwendet werden, um Event-Timing-Einträge ({{domxref("PerformanceEventTiming")}}) zu beobachten. Zum Beispiel, um Ereignisse für ein bestimmtes letztes Ziel zu protokollieren und zu messen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.target && entry.target.id === "myNode") {
      const delay = entry.processingStart - entry.startTime;
      console.log(entry.name, delay);
    }
  });
});

// Registrieren Sie den Observer für Ereignisse
observer.observe({ type: "event", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
