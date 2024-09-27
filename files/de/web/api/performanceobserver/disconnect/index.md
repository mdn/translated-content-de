---
title: "PerformanceObserver: disconnect() Methode"
short-title: disconnect()
slug: Web/API/PerformanceObserver/disconnect
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`disconnect()`** Methode der [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Schnittstelle wird verwendet, um den Performance Observer daran zu hindern, weitere [Performance-Entry](/de/docs/Web/API/PerformanceEntry)-Ereignisse zu empfangen.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Performance Observer stoppen

Das folgende Beispiel trennt den Performance Observer, um das Empfangen weiterer Performance-Entry-Ereignisse zu deaktivieren.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "measure" events
    // …
    // Disable additional performance events
    observer.disconnect();
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
