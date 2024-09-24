---
title: "PerformanceLongTaskTiming: Attributions-Eigenschaft"
short-title: Attribution
slug: Web/API/PerformanceLongTaskTiming/attribution
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte **`attribution`**-Eigenschaft der {{domxref("PerformanceLongTaskTiming")}}-Schnittstelle gibt ein Array von {{domxref('TaskAttributionTiming')}}-Objekten zurück.

## Wert

Ein {{jsxref("Array")}} von {{domxref('TaskAttributionTiming')}}-Objekten.

## Beispiele

### Protokollieren von Attributions für lange Tasks

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

- {{domxref('TaskAttributionTiming')}}
