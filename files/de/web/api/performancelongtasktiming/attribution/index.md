---
title: "PerformanceLongTaskTiming: attribution-Eigenschaft"
short-title: attribution
slug: Web/API/PerformanceLongTaskTiming/attribution
l10n:
  sourceCommit: 3dd7df0af3b0ada1a7c5784cc2bc5448adcda8af
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte **`attribution`**-Eigenschaft des [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Interfaces gibt ein Array von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekten zurück.

## Wert

Ein {{jsxref("Array")}} von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekten.

## Beispiele

### Protokollierung von Attributierungen für lange Aufgaben

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
