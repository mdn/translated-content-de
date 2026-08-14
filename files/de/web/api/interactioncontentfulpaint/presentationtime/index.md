---
title: "InteractionContentfulPaint: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/InteractionContentfulPaint/presentationTime
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`presentationTime`** des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Interfaces gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gezeichneten Pixel tatsächlich auf dem Bildschirm angezeigt wurden.

Die `presentationTime` ist optional — einige Browser geben möglicherweise immer `0` zurück oder geben den Wert überhaupt nicht an. Der Wert ist auch implementierungsabhängig — er kann je nach Browser, der sich entscheidet, ihn anzugeben, unterschiedlich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("operators/null", "null")}}, wenn der Wert nicht angegeben wird.

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `interaction-contentful-paint`-Performance-Einträge zu protokollieren, sobald sie in der Performance-Timeline des Browsers erfasst werden. Die `buffered`-Option wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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
