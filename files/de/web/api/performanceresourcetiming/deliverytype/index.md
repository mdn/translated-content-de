---
title: "PerformanceResourceTiming: deliveryType-Eigenschaft"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
l10n:
  sourceCommit: e8712755654ac056f2fb02282177e13d7b9ce780
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`deliveryType`** ist eine Zeichenfolge, die angibt, wie die Ressource bereitgestellt wurde – beispielsweise aus dem Cache oder durch Navigations-Prefetching.

## Wert

Eine Zeichenfolge, die einen der folgenden Werte haben kann:

- `"cache"`
  - : Die Ressource wurde aus dem Cache abgerufen.
- `"navigational-prefetch"` {{experimental_inline}} {{non-standard_inline}}
  - : Die Ressource wurde aus einer vorab abgerufenen Antwort geladen, die über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) in einem In-Memory-Cache gespeichert wurde.
- `""` (leere Zeichenfolge)
  - : Wird zurückgegeben, wenn keiner der vorherigen Bereitstellungstypen zutrifft oder wenn die Ressource von einer anderen Origin stammt und die Prüfung des {{HTTPHeader("Timing-Allow-Origin")}}-Headers nicht besteht. Im Cross-Origin-Fall wird `""` zurückgegeben, selbst wenn die Ressource aus dem Cache abgerufen wurde.

## Beispiele

### Ressourcen filtern

Mit der Eigenschaft `deliveryType` können Sie gezielt Resource-Timing-Einträge abrufen, beispielsweise nur solche für Ressourcen aus dem Cache.

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um über neue `resource`-Performance-Einträge zu informieren, sobald sie in der Performance-Timeline des Browsers erfasst werden. Mit der Option `buffered` können Sie auch auf Einträge zugreifen, die vor der Erstellung des Observers erfasst wurden.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list
    .getEntries()
    .filter((entry) => entry.deliveryType === "cache");
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

Im folgenden Beispiel wird [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwendet. Die Methode liefert nur die `resource`-Performance-Einträge, die zum Zeitpunkt des Aufrufs in der Performance-Timeline des Browsers vorhanden sind.

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

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
- [Resource Timing](/de/docs/Web/API/Performance_API/Resource_timing)
