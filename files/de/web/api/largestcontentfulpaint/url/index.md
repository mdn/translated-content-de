---
title: "LargestContentfulPaint: url-Eigenschaft"
short-title: url
slug: Web/API/LargestContentfulPaint/url
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die **`url`** schreibgeschützte Eigenschaft des {{domxref("LargestContentfulPaint")}}-Interfaces gibt die Anforderungs-URL des Elements zurück, wenn das Element ein Bild ist.

## Wert

Ein String, der eine URL enthält.

## Beispiele

### Protokollierung der URL des größten inhaltsreichen Elements

Dieses Beispiel verwendet einen {{domxref("PerformanceObserver")}}, der über neue `largest-contentful-paint`-Performance-Einträge informiert, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers entstanden sind.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Verwenden Sie den neuesten LCP-Kandidaten
  console.log(lastEntry.url);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
