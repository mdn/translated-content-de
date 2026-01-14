---
title: "Performance: eventCounts-Eigenschaft"
short-title: eventCounts
slug: Web/API/Performance/eventCounts
l10n:
  sourceCommit: 9548e8228e0872c244e3a0622ed0448139995ad6
---

{{APIRef("Performance API")}}

Die schreibgeschützte `performance.eventCounts`-Eigenschaft ist eine [`EventCounts`](/de/docs/Web/API/EventCounts)-Karte, die die Anzahl der Ereignisse enthält, die pro Ereignistyp seit dem Laden der Seite ausgelöst wurden.

Nicht alle Ereignistypen sind verfügbar. Sie können nur Zählungen für Ereignistypen erhalten, die von der Schnittstelle [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) unterstützt werden.

## Wert

Eine [`EventCounts`](/de/docs/Web/API/EventCounts)-Karte.
(Eine schreibgeschützte {{jsxref("Map")}} ohne die Methoden `clear()`, `delete()` und `set()`).

## Beispiele

### Bericht über Ereignistypen und ihre Zählungen

Wenn Sie die Ereigniszählungen an Ihre Analysen senden möchten, könnten Sie eine Funktion wie `sendToEventAnalytics` implementieren, die die Ereigniszählungen aus der `performance.eventCounts`-Karte entnimmt und dann die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet, um die Daten an Ihren Endpunkt zu senden.

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
