---
title: "PerformanceResourceTiming: deliveryType-Eigenschaft"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte **`deliveryType`**-Eigenschaft ist ein String, der angibt, wie die Ressource bereitgestellt wurde — zum Beispiel aus dem Cache oder aus einem navigational prefetch.

## Wert

Ein String, der einer der folgenden Werte sein kann:

- `"cache"`
  - : Die Ressource wurde aus dem Cache abgerufen.
- `"navigational-prefetch"` {{experimental_inline}}
  - : Die Ressource wurde aus einer vorab abgerufenen Antwort abgerufen, die über einen In-Memory-Cache durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) gespeichert wurde.
- `""` (leerer String)
  - : Wird zurückgegeben, wenn keiner der oben genannten Bereitstellungstypen zutrifft.

## Beispiele

### Filtern von Ressourcen

Die `deliveryType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourceneinträge zu erhalten; zum Beispiel nur diejenigen, die zwischengespeichert wurden.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Leistungseinträge zu benachrichtigen, sobald sie in der Leistungstimeline des Browsers erfasst werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers existierten.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list
    .getEntries()
    .filter((entry) => entry.deliveryType === "cache");
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Leistungseinträge zeigt, die im Leistungstimeline des Browsers zum Zeitpunkt des Aufrufs der Methode vorhanden sind.

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
