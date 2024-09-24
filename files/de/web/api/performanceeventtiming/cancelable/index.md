---
title: "PerformanceEventTiming: cancelable-Eigenschaft"
short-title: cancelable
slug: Web/API/PerformanceEventTiming/cancelable
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`cancelable`**-Eigenschaft gibt die [`cancelable`](/de/docs/Web/API/Event/cancelable)-Eigenschaft des zugehörigen Ereignisses zurück und zeigt an, ob das Ereignis abbrechbar ist.

## Wert

Ein Boolean. `true`, wenn das zugehörige Ereignis abbrechbar ist, `false` andernfalls.

## Beispiele

### Beobachtung von nicht abbrechbaren Ereignissen

Die `cancelable`-Eigenschaft kann verwendet werden, wenn man Einträge zur Ereigniszeitmessung ({{domxref("PerformanceEventTiming")}}) beobachtet. Zum Beispiel, um nur nicht abbrechbare Ereignisse zu protokollieren und zu messen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (!entry.cancelable) {
      const delay = entry.processingStart - entry.startTime;
      console.log(entry.name, delay);
    }
  });
});

// Registrieren des Beobachters für Ereignisse
observer.observe({ type: "event", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
