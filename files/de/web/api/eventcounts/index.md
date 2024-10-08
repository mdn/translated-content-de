---
title: EventCounts
slug: Web/API/EventCounts
l10n:
  sourceCommit: e18aa8e600733ebc25443075c563fd56361dfe98
---

{{APIRef("Performance API")}}

Die **`EventCounts`**-Schnittstelle der [Performance API](/de/docs/Web/API/Performance_API) liefert die Anzahl der Ereignisse, die für jeden Ereignistyp ausgelöst wurden.

Eine `EventCounts`-Instanz ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), bei dem jeder Schlüssel eine Zeichenkette für einen Ereignistyp ist und der entsprechende Wert eine ganze Zahl, die die Anzahl der ausgelösten Ereignisse für diesen Ereignistyp angibt.

## Konstruktor

Diese Schnittstelle hat keinen Konstruktor. In der Regel erhalten Sie eine Instanz dieses Objekts über die [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts)-Eigenschaft.

## Instanz-Eigenschaften

- `size`
  - : Siehe {{jsxref("Map.prototype.size")}} für Details.

## Instanz-Methoden

- `entries()`
  - : Siehe {{jsxref("Map.prototype.entries()")}} für Details.
- `forEach()`
  - : Siehe {{jsxref("Map.prototype.forEach()")}} für Details.
- `get()`
  - : Siehe {{jsxref("Map.prototype.get()")}} für Details.
- `has()`
  - : Siehe {{jsxref("Map.prototype.has()")}} für Details.
- `keys()`
  - : Siehe {{jsxref("Map.prototype.keys()")}} für Details.
- `values()`
  - : Siehe {{jsxref("Map.prototype.values()")}} für Details.

## Beispiele

### Arbeiten mit EventCount-Maps

Im Folgenden finden Sie einige Beispiele, um Informationen aus einem `EventCounts`-Map zu erhalten. Beachten Sie, dass das Map schreibgeschützt ist und die Methoden `clear()`, `delete()` und `set()` nicht verfügbar sind.

```js
for (entry of performance.eventCounts.entries()) {
  const type = entry[0];
  const count = entry[1];
}

const clickCount = performance.eventCounts.get("click");

const isExposed = performance.eventCounts.has("mousemove");
const exposedEventsCount = performance.eventCounts.size;
const exposedEventsList = [...performance.eventCounts.keys()];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts)
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
- {{jsxref("Map")}}
