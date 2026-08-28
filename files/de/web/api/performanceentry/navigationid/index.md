---
title: "PerformanceEntry: navigationId-Eigenschaft"
short-title: navigationId
slug: Web/API/PerformanceEntry/navigationId
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`navigationId`** des [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Interfaces gibt die ID der Navigation zurück, unter der dieses Paint stattgefunden hat.

## Wert

Ein ganzzahliger Wert, der einem entsprechenden [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)- oder [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Eintrag zugeordnet werden kann.

## Beschreibung

Mit [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Einträgen können Sie messen, wann {{Glossary("Soft_Navigation", "Soft Navigations")}} stattgefunden haben, ohne in den Code eingreifen zu müssen, der die Soft Navigation durchgeführt hat.

Dies ermöglicht es, die Leistungstimeline, die von den [Performance-APIs](/de/docs/Web/API/Performance_API) verwendet wird, so zu unterteilen, dass Leistungskennzahlen der Navigation zugeordnet werden, unter der sie aufgetreten sind. Da Performance-Einträge nachträglich emittiert werden und möglicherweise verzögert sind, können sie sich auf frühere Navigationen beziehen; Sie können nicht davon ausgehen, dass sie sich auf die aktuelle URL beziehen. Die `navigationId` gibt an, unter welcher Navigation der Eintrag stattgefunden hat.

### `navigationId` und das Messen von Soft Navigation Largest Contentful Paints

Während {{Glossary("Soft_Navigation", "Soft Navigations")}}, haben Paints, die vor der Aktualisierung der URL stattfinden, eine `navigationId`, die sich auf den Ort bezieht, _von dem_ navigiert wird. Wenn Sie das {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} einer laufenden Soft Navigation messen, möchten Sie es wahrscheinlich mit dem Ort in Verbindung bringen, _zu dem_ navigiert wird. Für den LCP-Fall sind [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) und [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) effektiver, um alle relevanten Paints unabhängig von der `navigationId` zu berücksichtigen, wenn diese Metrik berechnet wird.

## Beispiele

### Das `navigationId` der Soft Navigation protokollieren

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Performance-Einträge zu protokollieren, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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
