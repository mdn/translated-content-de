---
title: "LargestContentfulPaint: id Eigenschaft"
short-title: id
slug: Web/API/LargestContentfulPaint/id
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die **`id`**-Eigenschaft des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interfaces ist schreibgeschützt und gibt die ID des Elements zurück, das das größte inhaltsvolle Rendern darstellt.

## Wert

Ein String, der die ID des Elements enthält, oder der leere String, wenn es keine solche ID gibt.

## Beispiele

### Protokollierung der ID des größten inhaltsvollen Render_Element

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Performance-Einträge benachrichtigt, während sie in der Leistungszeitleiste des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.id);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
