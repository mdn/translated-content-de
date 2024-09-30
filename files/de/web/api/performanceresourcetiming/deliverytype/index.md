---
title: "PerformanceResourceTiming: deliveryType-Eigenschaft"
short-title: deliveryType
slug: Web/API/PerformanceResourceTiming/deliveryType
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`deliveryType`**-Eigenschaft ist eine schreibgeschützte Zeichenfolge, die angibt, wie die Ressource geliefert wurde — zum Beispiel aus dem Cache oder von einem Navigations-Prefetch.

## Wert

Eine Zeichenfolge, die einen der folgenden Werte annehmen kann:

- `"cache"`
  - : Die Ressource wurde aus dem Cache abgerufen.
- `"navigational-prefetch"` {{experimental_inline}}
  - : Die Ressource wurde aus einer vorab abgerufenen Antwort abgerufen, die in einem Arbeitsspeicher-Cache über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) gespeichert wurde.
- `""` (leere Zeichenfolge)
  - : Wird zurückgegeben, wenn keiner der oben genannten Lieferarten zutrifft.

## Beispiele

### Filtern von Ressourcen

Die `deliveryType`-Eigenschaft kann verwendet werden, um spezifische Ressourcentiming-Einträge zu erhalten; zum Beispiel nur diejenigen, die zwischengespeichert wurden.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um bei neuen `resource`-Performance-Einträgen zu benachrichtigen, wenn diese in der Leistungstimeline des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge von vor der Erstellung des Beobachters zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const cachedResources = list.getEntries().filter((entry) => {
    return entry.deliveryType === "cache";
  });
  console.log(cachedResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs der Methode in der Leistungstimeline des Browsers vorhanden sind.

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
