---
title: "PerformanceEntry: navigationId-Eigenschaft"
short-title: navigationId
slug: Web/API/PerformanceEntry/navigationId
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`navigationId`** des [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Interfaces gibt die ID der Navigation zurück, unter der dieses Rendering stattgefunden hat.

## Wert

Ein Integer, der mit einem entsprechenden [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)- oder [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Eintrag abgeglichen werden kann.

## Beschreibung

Durch die Verwendung von [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Einträgen können Sie messen, wann {{Glossary("Soft_Navigation", "Soft Navigations")}} stattgefunden haben, ohne in den Code einzugreifen, der die Soft Navigation durchgeführt hat.

Dies ermöglicht die Unterteilung der Leistungstimeline, die von den [Performance-APIs](/de/docs/Web/API/Performance_API) verwendet wird, um Leistungskennzahlen der Navigation zuzuschreiben, unter der sie aufgetreten sind. Da Leistungseinträge im Nachhinein ausgegeben werden und verzögert sein können, können sie sich auf frühere Navigationen beziehen; Sie können nicht davon ausgehen, dass sie sich auf die aktuelle URL beziehen. Die `navigationId` gibt an, unter welcher Navigation der Eintrag stattgefunden hat.

### `navigationId` und Messung von Soft Navigation Largest Contentful Paints

Während {{Glossary("Soft_Navigation", "Soft Navigations")}} haben Renderings, die vor der Aktualisierung der URL passieren, eine `navigationId`, die sich auf die Position bezieht, von der _navigiert wird_. Bei der Messung des {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} einer laufenden Soft Navigation möchten Sie es wahrscheinlich mit der Position verknüpfen, zu der _navigiert wird_. Für den LCP-Fall sind [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) und [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) effektiver, um alle relevanten Renderings unabhängig von der `navigationId` bei der Berechnung dieser Metrik zu berücksichtigen.

## Beispiele

### Protokollierung der `navigationId` der Soft Navigation

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation` Leistungseinträge zu protokollieren, während sie in der Leistungstimeline des Browsers erfasst werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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
