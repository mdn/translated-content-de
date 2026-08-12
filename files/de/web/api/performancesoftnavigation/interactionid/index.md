---
title: "PerformanceSoftNavigation: interactionId-Eigenschaft"
short-title: interactionId
slug: Web/API/PerformanceSoftNavigation/interactionId
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`interactionId`**-Eigenschaft der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle gibt die [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) des [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Eintrags zurück, der die Interaktion darstellt, die zur Soft-Navigation geführt hat.

## Wert

Ein ganzzahliger Wert, der mit der [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) der Interaktion übereinstimmt, die zur Soft-Navigation geführt hat.

## Beispiele

### Protokollieren der `interactionId` der Soft-Navigation

In diesem Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um neue `soft-navigation`-Performance-Einträge zu protokollieren, wenn sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Soft Nav:", entry.startTime, entry.interactionId);
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
