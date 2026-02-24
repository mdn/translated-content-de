---
title: "PerformanceResourceTiming: deliveryType-Eigenschaft"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`deliveryType`** ist ein String, der angibt, wie die Ressource geliefert wurde — zum Beispiel aus dem Cache oder durch ein navigational prefetch.

## Wert

Ein String, der einer der folgenden Werte sein kann:

- `"cache"`
  - : Die Ressource wurde aus dem Cache abgerufen.
- `"navigational-prefetch"` {{experimental_inline}} {{non-standard_inline}}
  - : Die Ressource wurde aus einer vorab abgerufenen Antwort bezogen, die über ein im Speicher befindliches Cache durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) gespeichert wurde.
- `""` (leerer String)
  - : Wird zurückgegeben, wenn keiner der oben genannten Lieferungstypen zutrifft.

## Beispiele

### Ressourcen filtern

Die `deliveryType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcentiming-Einträge zu erhalten; beispielsweise nur diejenigen, die zwischengespeichert wurden.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu informieren, sobald diese in der Leistungszeitleiste des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list
    .getEntries()
    .filter((entry) => entry.deliveryType === "cache");
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), welches nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Leistungszeitleiste des Browsers vorhanden sind.

```js
const scripts = performance
  .getEntriesByType("resource")
  .filter((entry) => entry.deliveryType === "cache");
console.log(scripts);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
