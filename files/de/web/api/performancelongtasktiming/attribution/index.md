---
title: "PerformanceLongTaskTiming: attribution-Eigenschaft"
short-title: attribution
slug: Web/API/PerformanceLongTaskTiming/attribution
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`attribution`**-Eigenschaft des readonly-Interfaces [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) gibt ein Array von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekten zurück.

## Wert

Ein {{jsxref("Array")}} von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekten.

## Beispiele

### Protokollierung von Attributen für lange Aufgaben

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
