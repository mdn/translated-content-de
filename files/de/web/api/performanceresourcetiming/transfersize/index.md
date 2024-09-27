---
title: "PerformanceResourceTiming: transferSize-Eigenschaft"
short-title: transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`transferSize`** schreibgeschützte Eigenschaft repräsentiert die Größe (in Oktetten) der abgerufenen Ressource. Die Größe umfasst die Antwortheader-Felder sowie den Antwort-Payload-Body (wie in [RFC7230](https://httpwg.org/specs/rfc7230.html#message.body) definiert).

Wenn die Ressource aus einem lokalen Cache abgerufen wird oder wenn es sich um eine Cross-Origin-Ressource handelt, gibt diese Eigenschaft null zurück.

## Wert

Die `transferSize`-Eigenschaft kann folgende Werte haben:

- Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe umfasst die Antwortheader-Felder sowie den [Antwort-Payload-Body](https://httpwg.org/specs/rfc7230.html#message.body) (RFC7230).
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Überprüfen, ob ein Cache getroffen wurde

Für Umgebungen, die die [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus)-Eigenschaft nicht unterstützen, kann die `transferSize`-Eigenschaft verwendet werden, um Cache-Treffer zu bestimmen. Wenn `transferSize` null ist und die Ressource eine nicht-null Decoded-Body-Size hat (was bedeutet, dass die Ressource Same-Origin ist oder {{HTTPHeader("Timing-Allow-Origin")}} hat), wurde die Ressource aus einem lokalen Cache abgerufen.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Leistungseinträge benachrichtigt, wenn sie in der Leistungszeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Observer-Erstellung zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
      console.log(`${entry.name} was loaded from cache`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Leistungseinträge zeigt, die sich zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitleiste des Browsers befinden:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

### Cross-Origin-Inhaltsgrößeninformationen

Wenn der Wert der `transferSize`-Eigenschaft `0` ist und nicht aus einem lokalen Cache geladen wurde, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Cross-Origin-Inhaltsgrößeninformationen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader festgelegt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Inhaltsgrößen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
