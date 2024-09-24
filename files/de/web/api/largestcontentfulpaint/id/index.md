---
title: "LargestContentfulPaint: id-Eigenschaft"
short-title: id
slug: Web/API/LargestContentfulPaint/id
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`id`**-Eigenschaft der {{domxref("LargestContentfulPaint")}}-Schnittstelle gibt die ID des Elements zurück, das das größte inhaltsvolle Paint ist.

## Wert

Ein String, der die ID des Elements enthält, oder ein leerer String, wenn es keine solche ID gibt.

## Beispiele

### Protokollieren der ID des größten inhaltsvollen Paint-Elements

Dieses Beispiel verwendet einen {{domxref("PerformanceObserver")}}, der über neue `largest-contentful-paint`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters gemacht wurden.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Verwenden Sie den neuesten LCP-Kandidaten
  console.log(lastEntry.id);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
