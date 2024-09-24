---
title: "PerformanceResourceTiming: deliveryType-Eigenschaft"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`deliveryType`** ist ein String, der angibt, wie die Ressource geliefert wurde — zum Beispiel aus dem Cache oder von einem navigationsbezogenen Prefetch.

## Wert

Ein String, der einen der folgenden Werte haben kann:

- `"cache"`
  - : Die Ressource wurde aus dem Cache abgerufen.
- `"navigational-prefetch"` {{experimental_inline}}
  - : Die Ressource wurde aus einer vorab abgerufenen Antwort geladen, die über ein [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) in einem In-Memory-Cache gespeichert wurde.
- `""` (leerer String)
  - : Wird zurückgegeben, wenn keiner der oben genannten Liefermethoden zutrifft.

## Beispiele

### Filtern von Ressourcen

Die Eigenschaft `deliveryType` kann verwendet werden, um nur bestimmte Ressourcentiming-Einträge abzurufen; zum Beispiel nur diejenigen, die zwischengespeichert wurden.

Das folgende Beispiel verwendet einen {{domxref("PerformanceObserver")}} zur Benachrichtigung über neue `resource`-Leistungseinträge, während sie in der Leistungstimeline des Browsers protokolliert werden. Die Option `buffered` wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list.getEntries().filter((entry) => {
    return entry.deliveryType === "cache";
  });
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Leistungseinträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Leistungstimeline des Browsers vorhanden sind.

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
