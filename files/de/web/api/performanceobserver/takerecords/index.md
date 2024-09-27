---
title: "PerformanceObserver: takeRecords()-Methode"
short-title: takeRecords()
slug: Web/API/PerformanceObserver/takeRecords
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Performance API")}}

Die **`takeRecords()`**-Methode der [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Schnittstelle gibt die aktuelle Liste der [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte zurück, die im Performance-Observer gespeichert sind, und leert ihn.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten.

## Beispiele

### Aufzeichnungen übernehmen

Im folgenden Beispiel wird die aktuelle Liste der Performance-Einträge in `records` gespeichert und der Performance-Observer geleert.

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
