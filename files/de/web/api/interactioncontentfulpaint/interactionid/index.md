---
title: "InteractionContentfulPaint: interactionId-Eigenschaft"
short-title: interactionId
slug: Web/API/InteractionContentfulPaint/interactionId
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`interactionId`** schreibgeschützte Eigenschaft der [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Schnittstelle gibt die [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) des [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Eintrags zurück, der die Interaktion darstellt, die zur Darstellung führte.

## Wert

Ein Integer, der der [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) der Interaktion entspricht, die zur Darstellung geführt hat.

## Beispiele

### Protokollierung der `interactionId` von `InteractionContentfulPaint`

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `interaction-contentful-paint` Leistungsdatensätze zu protokollieren, während sie in der Leistungszeitachse des Browsers erfasst werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers existierten.

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
