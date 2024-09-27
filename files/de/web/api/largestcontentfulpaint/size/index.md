---
title: "LargestContentfulPaint: size Eigenschaft"
short-title: size
slug: Web/API/LargestContentfulPaint/size
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die **`size`** schreibgeschützte Eigenschaft des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interfaces gibt die intrinsische Größe des Elements zurück, das den größten inhaltlichen Anstrich darstellt.

Die `size` des Elements ist das `width` mal `height` des [`Rechtecks`](/de/docs/Web/API/DOMRectReadOnly), das dieses Element auf dem Bildschirm erzeugt.

## Wert

Ein ganzzahliger Wert, der die Breite mal Höhe des Elements repräsentiert.

## Beispiele

### Protokollierung der Größe des größten inhaltlichen Anstrichelements

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Performanceeinträge informiert, wenn sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge von vor der Erstellung des Beobachters zuzugreifen.

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
