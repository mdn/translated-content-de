---
title: "InteractionContentfulPaint: interactionId-Eigenschaft"
short-title: interactionId
slug: Web/API/InteractionContentfulPaint/interactionId
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Die **`interactionId`**-Eigenschaft des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Interfaces gibt die [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) des [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Eintrags zurück, der die Interaktion darstellt, die zu dem Paint geführt hat.

## Wert

Ein Integer, der der [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) der Interaktion entspricht, die zu dem Paint geführt hat.

## Beispiele

### Protokollieren der `interactionId` von `InteractionContentfulPaint`

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `interaction-contentful-paint`-Performance-Einträge zu protokollieren, sobald sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers aufgezeichnet wurden.

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
