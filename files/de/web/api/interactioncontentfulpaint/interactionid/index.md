---
title: "InteractionContentfulPaint: InteraktionId-Eigenschaft"
short-title: interactionId
slug: Web/API/InteractionContentfulPaint/interactionId
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`interactionId`** des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Interfaces gibt die [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) des [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Eintrags zurück, der die Interaktion darstellt, die zu der Darstellung geführt hat.

## Wert

Eine Ganzzahl, die der [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) der Interaktion entspricht, die zu der Darstellung geführt hat.

## Beispiele

### Protokollierung der `interactionId` von `InteractionContentfulPaint`

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `interaction-contentful-paint`-Leistungseinträge zu protokollieren, sobald sie in der Leistungstimeline des Browsers erfasst werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(
      "Interaction Contentful Paint:",
      entry.startTime,
      entry.interactionId,
    );
  }
});
observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
