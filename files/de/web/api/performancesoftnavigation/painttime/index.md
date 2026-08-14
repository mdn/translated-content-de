---
title: "PerformanceSoftNavigation: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/PerformanceSoftNavigation/paintTime
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{APIRef("Performance API")}}

Die **`paintTime`**-Eigenschaft der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurückgibt, wann die Rendering-Phase endete und die Paint-Phase begann.

Die `paintTime` ist im Allgemeinen interoperabel: Der Wert sollte bei unterschiedlichen Implementierungen gleich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Performance-Einträge zu protokollieren, sobald sie in der Leistungszeitleiste des Browsers erfasst werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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
