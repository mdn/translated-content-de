---
title: "PerformanceLongTaskTiming: Eigenschaft attribution"
short-title: attribution
slug: Web/API/PerformanceLongTaskTiming/attribution
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{SeeCompatTable}}{{APIRef("Performance API")}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`attribution`** der Schnittstelle [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) gibt ein Array von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekten zurück.

## Wert

Ein {{jsxref("Array")}} von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekten.

## Beispiele

### Zuordnungen für lang andauernde Aufgaben protokollieren

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.attribution.forEach((attributionEntry) => {
      console.log(attributionEntry);
    });
  });
});

observer.observe({ type: "longtask", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)
