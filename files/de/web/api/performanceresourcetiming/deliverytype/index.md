---
title: "PerformanceResourceTiming: deliveryType-Eigenschaft"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`deliveryType`** ist ein String, der angibt, wie die Ressource bereitgestellt wurde — zum Beispiel aus dem Cache oder durch ein navigationales Vorladen.

## Wert

Ein String, der einer der folgenden Werte sein kann:

- `"cache"`
  - : Die Ressource wurde aus dem Cache abgerufen.
- `"navigational-prefetch"` {{experimental_inline}}
  - : Die Ressource wurde von einer vorgeholten Antwort abgerufen, die in einem In-Memory-Cache über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) gespeichert wurde.
- `""` (leerer String)
  - : Wird zurückgegeben, wenn keiner der oben genannten Bereitstellungstypen zutrifft.

## Beispiele

### Ressourcen filtern

Die `deliveryType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcentiming-Einträge zu erhalten; zum Beispiel nur solche, die gecacht wurden.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu informieren, sobald sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers existierten.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list.getEntries().filter((entry) => {
    return entry.deliveryType === "cache";
  });
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs der Methode in der Performance-Zeitachse des Browsers vorhanden sind.

```js
const scripts = performance.getEntriesByType("resource").filter((entry) => {
  return entry.deliveryType === "cache";
});
console.log(scripts);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
