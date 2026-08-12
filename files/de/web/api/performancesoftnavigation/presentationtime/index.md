---
title: "PerformanceSoftNavigation: Präsentationszeit-Eigenschaft"
short-title: presentationTime
slug: Web/API/PerformanceSoftNavigation/presentationTime
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Die **`presentationTime`**-Schreibgeschützte Eigenschaft der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gemalten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Die `presentationTime`-Eigenschaft ist optional — einige Browser geben möglicherweise immer `0` zurück oder stellen den Wert überhaupt nicht bereit. Der Wert ist auch implementierungsabhängig — er kann in Browsern, die ihn bereitstellen, unterschiedlich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("operators/null", "null")}}, wenn der Wert nicht verfügbar ist.

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Performanceeinträge zu protokollieren, während sie in der Leistungschronik des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers aufgezeichnet wurden.

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
