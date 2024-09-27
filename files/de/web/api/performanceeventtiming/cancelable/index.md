---
title: "PerformanceEventTiming: cancelable-Eigenschaft"
short-title: cancelable
slug: Web/API/PerformanceEventTiming/cancelable
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`cancelable`**-Eigenschaft gibt die [`cancelable`](/de/docs/Web/API/Event/cancelable)-Eigenschaft des zugehörigen Ereignisses zurück, die anzeigt, ob das Ereignis abgebrochen werden kann.

## Wert

Ein boolescher Wert. `true`, wenn das zugehörige Ereignis abgebrochen werden kann, `false` andernfalls.

## Beispiele

### Beobachtung nicht abbrechbarer Ereignisse

Die `cancelable`-Eigenschaft kann verwendet werden, um Ereignis-Timing-Einträge ([`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)) zu beobachten. Beispielsweise, um nur nicht abbrechbare Ereignisse zu protokollieren und zu messen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (!entry.cancelable) {
      const delay = entry.processingStart - entry.startTime;
      console.log(entry.name, delay);
    }
  });
});

// Register the observer for events
observer.observe({ type: "event", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
