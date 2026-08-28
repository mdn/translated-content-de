---
title: "InteractionContentfulPaint: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/InteractionContentfulPaint/paintTime
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die **`paintTime`**-Eigenschaft des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Interfaces gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und die Zeichenphase begann.

Die `paintTime` ist weithin interoperabel: Der Wert sollte in verschiedenen Implementierungen gleich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `interaction-contentful-paint`-Performance-Einträge zu protokollieren, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Die Option `buffered` wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters gemacht wurden.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(
      "Interaction Contentful Paint:",
      entry.startTime,
      entry.paintTime,
    );
  }
});
observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LargestContentfulPaint.presentationTime`](/de/docs/Web/API/LargestContentfulPaint/presentationTime)
