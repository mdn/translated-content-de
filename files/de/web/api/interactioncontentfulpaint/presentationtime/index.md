---
title: "InteractionContentfulPaint: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/InteractionContentfulPaint/presentationTime
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`presentationTime`** der Schnittstelle [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die gemalten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Die `presentationTime` ist optional — einige Browser können immer `0` zurückgeben oder den Wert überhaupt nicht anzeigen. Der Wert ist auch implementierungsabhängig — er kann bei Browsern, die sich entscheiden, ihn anzuzeigen, variieren.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("Operators/null", "null")}}, wenn der Wert nicht angezeigt wird.

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `interaction-contentful-paint`-Leistungseinträge zu protokollieren, wenn sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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
