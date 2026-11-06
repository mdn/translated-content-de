---
title: "Performance: eventCounts-Eigenschaft"
short-title: eventCounts
slug: Web/API/Performance/eventCounts
l10n:
  sourceCommit: 343a52cdc2920899bce227571c6b30075937d431
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft `performance.eventCounts` ist eine [`EventCounts`](/de/docs/Web/API/EventCounts)-Map, die für jeden Ereignistyp die Anzahl der seit dem Laden der Seite ausgelösten Ereignisse enthält.

Nicht alle Ereignistypen werden bereitgestellt. Sie können nur die Anzahl der Ereignisse für Typen abrufen, die von der [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Schnittstelle unterstützt werden.

## Wert

Eine [`EventCounts`](/de/docs/Web/API/EventCounts)-Map.
(Eine schreibgeschützte {{jsxref("Map")}} ohne die Methoden `clear()`, `delete()` und `set()`.)

## Beispiele

### Ereignistypen und ihre Anzahl melden

Wenn Sie die Anzahl der Ereignisse an Ihren Analysedienst senden möchten, können Sie eine Funktion wie `sendToEventAnalytics` implementieren. Diese liest die Werte aus der `performance.eventCounts`-Map und sendet die Daten anschließend mithilfe der [Fetch API](/de/docs/Web/API/Fetch_API) an Ihren Endpunkt.

```js
// Report all exposed events
for (const [type, count] of performance.eventCounts.entries()) {
  // sendToEventAnalytics(type, count);
}

// Report a specific event
const clickCount = performance.eventCounts.get("click");
// sendToEventAnalytics("click", clickCount);

// Check if an event count is exposed for a type
const isExposed = performance.eventCounts.has("mousemove"); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventCounts`](/de/docs/Web/API/EventCounts)
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
- {{jsxref("Map")}}
