---
title: "PerformanceResourceTiming: deliveryType-Eigenschaft"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`deliveryType`** ist eine Zeichenfolge, die angibt, wie die Ressource bereitgestellt wurde – beispielsweise aus dem Cache oder durch einen Navigations-Prefetch.

## Wert

Eine Zeichenfolge mit einem der folgenden Werte:

- `"cache"`
  - : Die Ressource wurde aus dem Cache abgerufen.
- `"navigational-prefetch"` {{non-standard_inline}}
  - : Die Ressource wurde aus einer vorab abgerufenen Antwort bezogen, die über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) in einem In-Memory-Cache gespeichert wurde.
- `""` (leere Zeichenfolge)
  - : Wird zurückgegeben, wenn keiner der zuvor genannten Bereitstellungstypen zutrifft oder wenn die Ressource von einer anderen Origin stammt und die Prüfung anhand von {{HTTPHeader("Timing-Allow-Origin")}} nicht besteht. Im Cross-Origin-Fall wird `""` zurückgegeben, selbst wenn die Ressource aus dem Cache abgerufen wurde.

## Beispiele

### Ressourcen filtern

Mit der Eigenschaft `deliveryType` lassen sich gezielt Resource-Timing-Einträge abrufen, beispielsweise nur solche für Ressourcen aus dem Cache.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu informieren, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Die Option `buffered` ermöglicht den Zugriff auf Einträge, die vor der Erstellung des Observers erfasst wurden.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list
    .getEntries()
    .filter((entry) => entry.deliveryType === "cache");
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType). Diese Methode zeigt nur `resource`-Performance-Einträge an, die zum Zeitpunkt des Aufrufs in der Performance-Zeitleiste des Browsers vorhanden sind.

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
- [Resource-Timing](/de/docs/Web/API/Performance_API/Resource_timing)
