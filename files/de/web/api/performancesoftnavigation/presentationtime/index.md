---
title: "PerformanceSoftNavigation: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/PerformanceSoftNavigation/presentationTime
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`presentationTime`** des [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Interfaces gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) an, wann die gezeichneten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.

`presentationTime` ist optional — einige Browser geben möglicherweise immer `0` zurück oder zeigen diesen Wert überhaupt nicht an. Der Wert ist auch implementationsabhängig — er kann in verschiedenen Browsern, die sich entscheiden ihn anzuzeigen, unterschiedlich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("Operators/null", "null")}}, wenn der Wert nicht verfügbar ist.

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Performance-Einträge zu protokollieren, wenn sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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
