---
title: "LargestContentfulPaint: id-Eigenschaft"
short-title: id
slug: Web/API/LargestContentfulPaint/id
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`id`** des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interfaces gibt die ID des Elements zurück, das die größte inhaltliche Darstellung ist.

## Wert

Ein String, der die ID des Elements enthält, oder der leere String, wenn keine solche ID vorhanden ist.

## Beispiele

### Protokollierung der ID des größten inhaltlichen Darstellungselements

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `largest-contentful-paint`-Leistungseinträge informiert, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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
