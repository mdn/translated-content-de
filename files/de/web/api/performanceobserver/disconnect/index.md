---
title: "PerformanceObserver: disconnect()-Methode"
short-title: disconnect()
slug: Web/API/PerformanceObserver/disconnect
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`disconnect()`**-Methode des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Interfaces wird verwendet, um den Leistungsbeobachter daran zu hindern, weitere [Performance-Eintrag](/de/docs/Web/API/PerformanceEntry)-Ereignisse zu empfangen.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Stoppen eines Leistungsbeobachters

Das folgende Beispiel trennt den Leistungsbeobachter, um das Empfangen weiterer Performance-Eintrag-Ereignisse zu deaktivieren.

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
