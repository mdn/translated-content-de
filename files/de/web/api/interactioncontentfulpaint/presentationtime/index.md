---
title: "InteractionContentfulPaint: Präsentationszeit-Eigenschaft"
short-title: presentationTime
slug: Web/API/InteractionContentfulPaint/presentationTime
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Die **`presentationTime`**-Eigenschaft, die nur lesbar ist, des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Interfaces gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gezeichneten Pixel tatsächlich auf dem Bildschirm angezeigt wurden.

Die `presentationTime` ist optional — einige Browser können immer `0` zurückgeben oder den Wert überhaupt nicht bereitstellen. Der Wert ist auch implementierungsabhängig — er kann in Browsern, die sich entscheiden, ihn bereitzustellen, variieren.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("operators/null", "null")}}, wenn der Wert nicht bereitgestellt wird.

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `interaction-contentful-paint`-Performanceeinträge zu protokollieren, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Beobachters zuzugreifen.

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
