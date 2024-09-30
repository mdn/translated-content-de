---
title: "LargestContentfulPaint: loadTime-Eigenschaft"
short-title: loadTime
slug: Web/API/LargestContentfulPaint/loadTime
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die **`loadTime`**-Schreibgeschützte Eigenschaft der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Schnittstelle gibt die Zeit zurück, wann das Element geladen wurde.

## Wert

Ein [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit in Millisekunden darstellt, wann das Element geladen wurde.

## Beispiele

### Protokollierung des loadTime der größten inhaltsvollen Darstellung

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Performance-Einträge benachrichtigt wird, sobald diese in der Leistungstimeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge vor der Erstellung des Beobachters zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.loadTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
