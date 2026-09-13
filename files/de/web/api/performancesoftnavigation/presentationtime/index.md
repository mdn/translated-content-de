---
title: "PerformanceSoftNavigation: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/PerformanceSoftNavigation/presentationTime
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`presentationTime`** schreibgeschützte Eigenschaft der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die gezeichneten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.

Die `presentationTime` ist optional — einige Browser geben möglicherweise immer `0` zurück oder stellen den Wert überhaupt nicht zur Verfügung. Der Wert ist ebenfalls implementierungsabhängig — er kann bei Browsern, die ihn bereitstellen, variieren.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("Operators/null", "null")}}, wenn der Wert nicht verfügbar ist.

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `soft-navigation`-Performance-Einträge zu protokollieren, sobald sie in der Performance-Zeitachse des Browsers erfasst werden. Die Option `buffered` wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

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
