---
title: "LargestContentfulPaint: url-Eigenschaft"
short-title: url
slug: Web/API/LargestContentfulPaint/url
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`url`**-Eigenschaft des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interfaces gibt die Anfrage-URL des Elements zurück, wenn das Element ein Bild ist.

## Wert

Ein String, der eine URL enthält.

## Beispiele

### Protokollierung der URL des größten inhaltsreichen Paints

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Leistungseinträge informiert, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log(lastEntry.url);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
