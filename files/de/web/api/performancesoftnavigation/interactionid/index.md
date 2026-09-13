---
title: "PerformanceSoftNavigation: interactionId-Eigenschaft"
short-title: interactionId
slug: Web/API/PerformanceSoftNavigation/interactionId
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`interactionId`** des [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Interfaces gibt die [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) des [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Eintrags zurück, der die Interaktion repräsentiert, die zu der weichen Navigation geführt hat.

## Wert

Eine Ganzzahl, die der [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) der Interaktion entspricht, die zu der weichen Navigation geführt hat.

## Beispiele

### Protokollierung der `interactionId` der weichen Navigation

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Performanceeinträge zu protokollieren, während sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge von vor der Erstellung des Beobachters zuzugreifen.

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
