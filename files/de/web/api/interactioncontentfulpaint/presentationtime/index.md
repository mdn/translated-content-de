---
title: "InteractionContentfulPaint: Eigenschaft presentationTime"
short-title: presentationTime
slug: Web/API/InteractionContentfulPaint/presentationTime
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die **`presentationTime`**-Eigenschaft der [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Schnittstelle gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gerenderten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.

Die `presentationTime` ist optional — einige Browser können immer `0` zurückgeben oder den Wert überhaupt nicht bereitstellen. Der Wert ist auch implementationsabhängig — er kann zwischen Browsern, die sich dafür entscheiden, ihn bereitzustellen, unterschiedlich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("Operators/null", "null")}}, wenn der Wert nicht bereitgestellt wird.

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `interaction-contentful-paint`-Performance-Einträge zu protokollieren, sobald sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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
