---
title: "PerformanceSoftNavigation: Eigenschaft presentationTime"
short-title: presentationTime
slug: Web/API/PerformanceSoftNavigation/presentationTime
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`presentationTime`** des [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Interfaces gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) an, wann die gezeichneten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.

Der `presentationTime` ist optional — einige Browser geben möglicherweise immer `0` zurück oder geben den Wert überhaupt nicht frei. Der Wert ist außerdem implementierungsabhängig — er kann zwischen Browsern, die sich entscheiden, ihn freizugeben, variieren.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("operators/null", "null")}}, wenn der Wert nicht freigegeben wird.

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Leistungseinträge zu protokollieren, während sie in der Leistungschronik des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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
