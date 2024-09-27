---
title: "Performance: eventCounts-Eigenschaft"
short-title: eventCounts
slug: Web/API/Performance/eventCounts
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

Die schreibgeschützte `performance.eventCounts`-Eigenschaft ist eine [`EventCounts`](/de/docs/Web/API/EventCounts)-Map, die die Anzahl der Ereignisse enthält, die pro Ereignistyp ausgelöst wurden.

Nicht alle Ereignistypen werden angezeigt. Sie können nur Zählungen zu Ereignistypen abrufen, die von der [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Schnittstelle unterstützt werden.

## Wert

Eine [`EventCounts`](/de/docs/Web/API/EventCounts)-Map.
(Eine schreibgeschützte {{jsxref("Map")}} ohne die Methoden `clear()`, `delete()`, und `set()`).

## Beispiele

### Meldung von Ereignistypen und deren Zählungen

Wenn Sie die Ereigniszählungen an Ihre Analysen senden möchten, könnten Sie eine Funktion wie `sendToEventAnalytics` implementieren, die die Ereigniszählungen aus der `performance.eventCounts`-Map entnimmt und dann die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet, um die Daten an Ihren Endpunkt zu senden.

```js
// Report all exposed events
for (entry of performance.eventCounts.entries()) {
  const type = entry[0];
  const count = entry[1];
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
