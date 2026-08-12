---
title: "PerformanceSoftNavigation: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/PerformanceSoftNavigation/paintTime
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Die **`paintTime`**-Eigenschaft, die nur lesbar ist, der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und die Paint-Phase begann.

Die `paintTime` ist im Wesentlichen interoperabel: Der Wert sollte in verschiedenen Implementierungen gleich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Performanceeinträge zu protokollieren, wie sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('Soft Nav:', entry.startTime, entry.paintTime);
  }
});
observer.observe({ type: "soft-navigation", buffered: true });

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LargestContentfulPaint.presentationTime")}}
```
