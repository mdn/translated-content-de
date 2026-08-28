---
title: "PerformanceSoftNavigation: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/PerformanceSoftNavigation/paintTime
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die **`paintTime`**-Eigenschaft, die nur lesbar ist, der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die Renderphase endete und die Malphase begann.

Die `paintTime` ist weitgehend interoperabel: Der Wert sollte in verschiedenen Implementierungen gleich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Performance-Einträge zu protokollieren, wie sie in der Leistungszeitleiste des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Soft Nav:", entry.startTime, entry.paintTime);
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LargestContentfulPaint.presentationTime`](/de/docs/Web/API/LargestContentfulPaint/presentationTime)
