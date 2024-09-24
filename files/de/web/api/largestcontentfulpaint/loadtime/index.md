---
title: "LargestContentfulPaint: loadTime-Eigenschaft"
short-title: loadTime
slug: Web/API/LargestContentfulPaint/loadTime
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die **`loadTime`**-Eigenschaft nur-lesbar der {{domxref("LargestContentfulPaint")}}-Schnittstelle gibt die Zeit zurück, zu der das Element geladen wurde.

## Wert

Ein {{domxref("DOMHighResTimeStamp","Zeitstempel")}}, der die Zeit in Millisekunden darstellt, zu der das Element geladen wurde.

## Beispiele

### Protokollierung der loadTime der größten inhaltlichen Darstellung

Dieses Beispiel verwendet einen {{domxref("PerformanceObserver")}}, der über neue `largest-contentful-paint`-Leistungseinträge informiert wird, sobald sie in der Leistungszeitachse des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters vorhanden sind.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Verwenden Sie den neuesten LCP-Kandidaten
  console.log(lastEntry.loadTime);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
