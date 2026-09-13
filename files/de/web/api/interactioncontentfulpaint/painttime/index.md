---
title: "InteractionContentfulPaint: paintTime-Eigenschaft"
short-title: paintTime
slug: Web/API/InteractionContentfulPaint/paintTime
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`paintTime`**-Eigenschaft des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Interfaces gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die Rendering-Phase endete und die Paint-Phase begann.

Die `paintTime` ist weitgehend interoperabel: Der Wert sollte über verschiedene Implementierungen hinweg gleich sein.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Beispiele

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um neue `interaction-contentful-paint`-Performance-Einträge zu protokollieren, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers liegen.

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
