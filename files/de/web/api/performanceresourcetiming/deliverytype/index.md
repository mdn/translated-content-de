---
title: "PerformanceResourceTiming: deliveryType-Eigenschaft"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`deliveryType`**-Eigenschaft ist eine schreibgeschützte Zeichenkette, die angibt, wie die Ressource bereitgestellt wurde — zum Beispiel aus dem Cache oder über ein navigational prefetch.

## Wert

Eine Zeichenkette, die einer der folgenden Werte sein kann:

- `"cache"`
  - : Die Ressource wurde aus dem Cache abgerufen.
- `"navigational-prefetch"` {{experimental_inline}}
  - : Die Ressource wurde von einer vorab abgerufenen Antwort aus einem im Speicher befindlichen Cache über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) abgerufen.
- `""` (leere Zeichenkette)
  - : Wird zurückgegeben, wenn keiner der oben genannten Bereitstellungstypen zutrifft.

## Beispiele

### Filtern von Ressourcen

Die `deliveryType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcentiming-Einträge zu erhalten; zum Beispiel nur solche, die zwischengespeichert wurden.

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um über neue `resource`-Performance-Einträge zu informieren, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Die `buffered`-Option wird verwendet, um Einträge aus der Zeit vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list.getEntries().filter((entry) => {
    return entry.deliveryType === "cache";
  });
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die im Zeitpunkt des Aufrufens der Methode in der Performance-Zeitleiste des Browsers vorhanden sind.

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
