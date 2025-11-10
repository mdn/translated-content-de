---
title: "PerformanceResourceTiming: deliveryType-Eigenschaft"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
l10n:
  sourceCommit: 9c2dabaabc326c4a3fed27f6e9bcb3605958e516
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`deliveryType`** ist ein String, der anzeigt, wie die Ressource bereitgestellt wurde — zum Beispiel aus dem Cache oder durch ein Navigations-Prefetch.

## Wert

Ein String, der einen der folgenden Werte annehmen kann:

- `"cache"`
  - : Die Ressource wurde aus dem Cache abgerufen.
- `"navigational-prefetch"` {{experimental_inline}} {{non-standard_inline}}
  - : Die Ressource wurde aus einer vorab abgerufenen Antwort bereitgestellt, die über ein In-Memory-Cache über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) gespeichert wurde.
- `""` (leerer String)
  - : Wird zurückgegeben, wenn keiner der obigen Bereitstellungstypen zutrifft.

## Beispiele

### Ressourcen filtern

Die `deliveryType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcentiming-Einträge zu erhalten; zum Beispiel nur die, die zwischengespeichert wurden.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performanceeinträge zu benachrichtigen, sobald sie in der Leistungszeitleiste des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge vor Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list
    .getEntries()
    .filter((entry) => entry.deliveryType === "cache");
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), welche nur die `resource`-Performanceeinträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Leistungszeitleiste des Browsers vorhanden sind.

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
