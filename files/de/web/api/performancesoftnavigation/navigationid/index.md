---
title: "PerformanceSoftNavigation: navigationId-Eigenschaft"
short-title: navigationId
slug: Web/API/PerformanceSoftNavigation/navigationId
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`navigationId`** der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle gibt eine zunehmende Ganzzahl-ID zurück, die für diesen Seitenaufruf einzigartig ist.

## Wert

Eine Ganzzahl, die für diesen Seitenaufruf einzigartig ist.

## Beispiele

### Protokollierung der `navigationId` der Soft-Navigation

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Performanceeinträge zu protokollieren, während sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Soft Nav:", entry.startTime, entry.navigationId);
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
