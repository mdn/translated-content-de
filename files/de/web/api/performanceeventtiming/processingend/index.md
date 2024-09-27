---
title: "PerformanceEventTiming: processingEnd-Eigenschaft"
short-title: processingEnd
slug: Web/API/PerformanceEventTiming/processingEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`processingEnd`**-Eigenschaft gibt die Zeit zurück, zu der der letzte Ereignishandler die Ausführung beendet hat.

Sie ist gleich [`PerformanceEventTiming.processingStart`](/de/docs/Web/API/PerformanceEventTiming/processingStart), wenn es keine solchen Ereignishandler gibt.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Zeitstempel.

## Beispiele

### Verwendung der processingEnd-Eigenschaft

Die `processingEnd`-Eigenschaft kann verwendet werden, wenn man Ereignis-Timing-Einträge beobachtet ([`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)). Zum Beispiel, um die Eingabeverzögerung oder die Zeiten der Ereignisverarbeitung zu berechnen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // Full duration
    const duration = entry.duration;
    // Input delay (before processing event)
    const delay = entry.processingStart - entry.startTime;
    // Synchronous event processing time
    // (between start and end dispatch)
    const time = entry.processingEnd - entry.processingStart;
  });
});
// Register the observer for events
observer.observe({ type: "event", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceEventTiming.processingStart`](/de/docs/Web/API/PerformanceEventTiming/processingStart)
