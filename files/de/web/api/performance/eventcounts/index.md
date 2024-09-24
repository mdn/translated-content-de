---
title: "Performance: eventCounts-Eigenschaft"
short-title: eventCounts
slug: Web/API/Performance/eventCounts
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

Die schreibgeschützte `performance.eventCounts`-Eigenschaft ist eine {{domxref("EventCounts")}}-Karte, die die Anzahl der Ereignisse enthält, die pro Ereignistyp ausgelöst wurden.

Nicht alle Ereignistypen sind sichtbar. Sie können nur Zählungen für Ereignistypen erhalten, die von der {{domxref("PerformanceEventTiming")}}-Schnittstelle unterstützt werden.

## Wert

Eine {{domxref("EventCounts")}}-Karte.
(Eine schreibgeschützte {{jsxref("Map")}} ohne die Methoden `clear()`, `delete()` und `set()`).

## Beispiele

### Ereignistypen und ihre Zählungen berichten

Wenn Sie Ereigniszählungen an Ihre Analysen senden möchten, können Sie eine Funktion wie `sendToEventAnalytics` implementieren, die die Ereigniszählungen von der `performance.eventCounts`-Karte entnimmt und dann die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet, um die Daten an Ihren Endpunkt zu senden.

```js
// Alle sichtbaren Ereignisse melden
for (entry of performance.eventCounts.entries()) {
  const type = entry[0];
  const count = entry[1];
  // sendToEventAnalytics(type, count);
}

// Ein bestimmtes Ereignis melden
const clickCount = performance.eventCounts.get("click");
// sendToEventAnalytics("click", clickCount);

// Prüfen, ob eine Ereigniszählung für einen Typ sichtbar ist
const isExposed = performance.eventCounts.has("mousemove"); // false
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("EventCounts")}}
- {{domxref("PerformanceEventTiming")}}
- {{jsxref("Map")}}
