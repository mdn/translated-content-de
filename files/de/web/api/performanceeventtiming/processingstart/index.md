---
title: "PerformanceEventTiming: processingStart-Eigenschaft"
short-title: processingStart
slug: Web/API/PerformanceEventTiming/processingStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`processingStart`**-Eigenschaft gibt die Zeit zurück, zu der die Ereignisverarbeitung begonnen hat. Dies ist der Zeitpunkt, an dem die Ereignis-Handler ausgeführt werden sollen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Zeitstempel.

## Beispiele

### Verwendung der processingStart-Eigenschaft

Die `processingStart`-Eigenschaft kann genutzt werden, wenn man Ereignis-Timingeinträge ([`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)) beobachtet. Zum Beispiel, um Eingabeverzögerungen oder Ereignisverarbeitungszeiten zu berechnen.

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

- [`PerformanceEventTiming.processingEnd`](/de/docs/Web/API/PerformanceEventTiming/processingEnd)
