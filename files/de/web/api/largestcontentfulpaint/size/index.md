---
title: "LargestContentfulPaint: size-Eigenschaft"
short-title: size
slug: Web/API/LargestContentfulPaint/size
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`size`** des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interfaces gibt die intrinsische Größe des Elements zurück, das den größten contentful paint darstellt.

Die `size` des Elements ist die `Breite` mal `Höhe` des [`Rechtecks`](/de/docs/Web/API/DOMRectReadOnly), das dieses Element auf dem Bildschirm erzeugt.

## Wert

Ein Ganzzahlwert, der das Produkt aus Breite und Höhe des Elements darstellt.

## Beispiele

### Protokollieren der Größe des größten contentful paint Elements

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Performance-Einträge benachrichtigt, wenn sie in der Performance-Timeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.size);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
