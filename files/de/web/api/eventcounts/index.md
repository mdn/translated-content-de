---
title: EventCounts
slug: Web/API/EventCounts
l10n:
  sourceCommit: 343a52cdc2920899bce227571c6b30075937d431
---

{{APIRef("Performance API")}}

Die **`EventCounts`**-Schnittstelle der [Performance API](/de/docs/Web/API/Performance_API) gibt für jeden Ereignistyp an, wie viele Ereignisse ausgelöst wurden.

Eine `EventCounts`-Instanz ist ein schreibgeschütztes [`Map`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis). Jeder Schlüssel ist eine Zeichenfolge mit dem Namen eines Ereignistyps. Der zugehörige Wert ist eine Ganzzahl, die angibt, wie viele Ereignisse dieses Typs ausgelöst wurden.

## Konstruktor

Diese Schnittstelle hat keinen Konstruktor. Eine Instanz dieses Objekts erhalten Sie üblicherweise über die Eigenschaft [`performance.eventCounts`](/de/docs/Web/API/Performance/eventCounts).

## Instanzeigenschaften

- `size`
  - : Weitere Informationen finden Sie unter {{jsxref("Map.prototype.size")}}.

## Instanzmethoden

- `entries()`
  - : Weitere Informationen finden Sie unter {{jsxref("Map.prototype.entries()")}}.
- `forEach()`
  - : Weitere Informationen finden Sie unter {{jsxref("Map.prototype.forEach()")}}.
- `get()`
  - : Weitere Informationen finden Sie unter {{jsxref("Map.prototype.get()")}}.
- `has()`
  - : Weitere Informationen finden Sie unter {{jsxref("Map.prototype.has()")}}.
- `keys()`
  - : Weitere Informationen finden Sie unter {{jsxref("Map.prototype.keys()")}}.
- `values()`
  - : Weitere Informationen finden Sie unter {{jsxref("Map.prototype.values()")}}.

## Beispiele

### Mit EventCounts-Maps arbeiten

Die folgenden Beispiele zeigen, wie Sie Informationen aus einer `EventCounts`-Map abrufen. Beachten Sie, dass die Map schreibgeschützt ist und die Methoden `clear()`, `delete()` und `set()` nicht verfügbar sind.

```js
for (const [type, count] of performance.eventCounts.entries()) {
  console.log(type, count);
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
