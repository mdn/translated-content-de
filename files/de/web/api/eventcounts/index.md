---
title: Ereigniszähler
slug: Web/API/EventCounts
l10n:
  sourceCommit: e18aa8e600733ebc25443075c563fd56361dfe98
---

{{APIRef("Performance API")}}

Das **`EventCounts`**-Interface der [Performance API](/de/docs/Web/API/Performance_API) stellt die Anzahl der für jeden Ereignistyp ausgelösten Ereignisse bereit.

Eine `EventCounts`-Instanz ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), bei dem jeder Schlüssel der Name eines Ereignistyps ist und der entsprechende Wert ein Integer ist, der die Anzahl der für diesen Ereignistyp ausgelösten Ereignisse angibt.

## Konstruktor

Dieses Interface hat keinen Konstruktor. Normalerweise erhalten Sie eine Instanz dieses Objekts durch Verwendung der {{domxref("performance.eventCounts")}}-Eigenschaft.

## Instanzeigenschaften

- `size`
  - : Siehe {{jsxref("Map.prototype.size")}} für Details.

## Instanzmethoden

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

Unten sind einige Beispiele zum Abrufen von Informationen aus einer `EventCounts`-Map. Beachten Sie, dass die Map schreibgeschützt ist und die Methoden `clear()`, `delete()` und `set()` nicht verfügbar sind.

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

- {{domxref("performance.eventCounts")}}
- {{domxref("PerformanceEventTiming")}}
- {{jsxref("Map")}}
