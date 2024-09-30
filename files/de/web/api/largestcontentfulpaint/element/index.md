---
title: "LargestContentfulPaint: element-Eigenschaft"
short-title: element
slug: Web/API/LargestContentfulPaint/element
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die **`element`**-Eigenschaft der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Schnittstelle gibt ein Objekt zurück, das das [`Element`](/de/docs/Web/API/Element) darstellt, welches den größten inhaltsvollen Anstrich im Dokument besitzt.

## Wert

Ein [`Element`](/de/docs/Web/API/Element).

## Beispiele

### Protokollierung des Elements mit dem größten inhaltsvollen Anstrich

In diesem Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um über neue `largest-contentful-paint`-Leistungseinträge zu informieren, während sie in der Leistungszeitachse des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.element);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
