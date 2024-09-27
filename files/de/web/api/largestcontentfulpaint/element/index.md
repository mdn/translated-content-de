---
title: "LargestContentfulPaint: element-Eigenschaft"
short-title: element
slug: Web/API/LargestContentfulPaint/element
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`element`**-Eigenschaft der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Schnittstelle gibt ein Objekt zurück, das das [`Element`](/de/docs/Web/API/Element) repräsentiert, welches der größte darstellbare Inhalt ist.

## Wert

Ein [`Element`](/de/docs/Web/API/Element).

## Beispiele

### Protokollierung des größten darstellbaren Inhalts-Elements

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Leistungseinträge benachrichtigt, sobald sie in der Leistungszeitleiste des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge von vor der Erstellung des Beobachters zuzugreifen.

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
