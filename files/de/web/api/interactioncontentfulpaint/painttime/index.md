---
title: "InteractionContentfulPaint: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/InteractionContentfulPaint/paintTime
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`paintTime`** der Schnittstelle [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und die Paint-Phase begann.

Die `paintTime` ist weitgehend kompatibel: Der Wert sollte in verschiedenen Implementierungen identisch sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `interaction-contentful-paint`-Leistungseinträge zu protokollieren, sobald sie in der Leistungstimeline des Browsers erfasst werden. Die Option `buffered` wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('Interaction Contentful Paint:', entry.startTime, entry.paintTime);
  }
});
observer.observe({ type: "interaction-contentful-paint", buffered: true });

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LargestContentfulPaint.presentationTime")}}
```
