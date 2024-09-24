---
title: "LargestContentfulPaint: Element-Eigenschaft"
short-title: Element
slug: Web/API/LargestContentfulPaint/element
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die **`element`** schreibgeschützte Eigenschaft der {{domxref("LargestContentfulPaint")}}-Schnittstelle gibt ein Objekt zurück, das das {{domxref("Element")}} darstellt, welches das größte inhaltsreiche Rendern ist.

## Wert

Ein {{domxref("Element")}}.

## Beispiele

### Protokollierung des Elements des größten inhaltsreichen Renderns

Dieses Beispiel verwendet einen {{domxref("PerformanceObserver")}}, der über neue `largest-contentful-paint`-Leistungseinträge benachrichtigt, sobald sie in der Leistungszeitleiste des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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
