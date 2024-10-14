---
title: "PerformanceObserver: takeRecords()-Methode"
short-title: takeRecords()
slug: Web/API/PerformanceObserver/takeRecords
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`takeRecords()`**-Methode des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Interfaces gibt die aktuelle Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten zurück, die im Performance-Observer gespeichert sind, und leert diesen.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten.

## Beispiele

### Aufzeichnen von Einträgen

Das folgende Beispiel speichert die aktuelle Liste der Performance-Einträge in `records` und leert den Performance-Observer.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "mark" and "measure" events
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
const records = observer.takeRecords();
console.log(records[0].name);
console.log(records[0].startTime);
console.log(records[0].duration);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
