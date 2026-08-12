---
title: "InteractionContentfulPaint: navigationId-Eigenschaft"
short-title: navigationId
slug: Web/API/InteractionContentfulPaint/navigationId
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`navigationId`** des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Interfaces gibt die ID der Navigation zurück, unter der dieses Rendering stattgefunden hat.

Beachten Sie, dass bei {{Glossary("Soft_Navigation", "Soft Navigations")}} Renderings, die vor der Aktualisierung der URL stattfinden, möglicherweise als {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} der gerade ablaufenden Soft-Navigation betrachtet werden sollten. Für den LCP-Fall sind [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) und [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) effektiver, um diese Metrik zu berechnen und alle relevanten Inhalte unabhängig von der `navigationId` zu berücksichtigen.

## Wert

Eine Ganzzahl, die mit einem Eintrag entweder aus [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) oder aus [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation) übereinstimmt.

## Beispiele

### Protokollierung der `navigationId` von `InteractionContentfulPaint`

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `interaction-contentful-paint`-Leistungseinträge zu protokollieren, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers erstellt wurden.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(
      "Interaction Contentful Paint:",
      entry.startTime,
      entry.navigationId,
    );
  }
});
observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
