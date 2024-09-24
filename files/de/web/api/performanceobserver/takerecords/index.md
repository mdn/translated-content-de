---
title: "PerformanceObserver: Methode takeRecords()"
short-title: takeRecords()
slug: Web/API/PerformanceObserver/takeRecords
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Performance API")}}

Die **`takeRecords()`**-Methode des {{domxref('PerformanceObserver')}}-Interfaces gibt die aktuelle Liste von {{domxref("PerformanceEntry")}}-Objekten zurück, die im Performance-Observer gespeichert sind, und leert diesen.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von {{domxref("PerformanceEntry")}}-Objekten.

## Beispiele

### Aufnehmen von Datensätzen

Das folgende Beispiel speichert die aktuelle Liste der Performance-Einträge in `records` und leert den Performance-Observer.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Verarbeiten von "mark" und "measure" Ereignissen
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
