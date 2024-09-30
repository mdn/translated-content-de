---
title: "PerformanceResourceTiming: transferSize-Eigenschaft"
short-title: transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`transferSize`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe umfasst die Antwortkopf-Felder plus den Antwort-Nutzlastkörper (wie in [RFC7230](https://httpwg.org/specs/rfc7230.html#message.body) definiert).

Wenn die Ressource aus einem lokalen Cache abgerufen wird oder es sich um eine Cross-Origin-Ressource handelt, gibt diese Eigenschaft null zurück.

## Wert

Die `transferSize`-Eigenschaft kann folgende Werte annehmen:

- Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe umfasst die Antwortkopf-Felder plus den [Antwort-Nutzlastkörper](https://httpwg.org/specs/rfc7230.html#message.body) (RFC7230).
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anforderung ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Überprüfen, ob ein Cache-Treffer vorliegt

Für Umgebungen, die die [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus)-Eigenschaft nicht unterstützen, kann die `transferSize`-Eigenschaft verwendet werden, um Cache-Treffer zu bestimmen. Wenn `transferSize` null ist und die Ressource eine nicht-null decodierte Körpergröße hat (was bedeutet, dass die Ressource same-origin ist oder {{HTTPHeader("Timing-Allow-Origin")}} hat), wurde die Ressource aus einem lokalen Cache abgerufen.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der benachrichtigt, wenn neue `resource`-Performance-Einträge im Leistungszeitstrahl des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erzeugung des Observers vorhanden waren.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode im Leistungszeitstrahl des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

### Größeninformationen zu Cross-Origin-Inhalten

Wenn der Wert der `transferSize`-Eigenschaft `0` ist und nicht aus einem lokalen Cache geladen wurde, könnte die Ressource eine Cross-Origin-Anforderung sein. Um Größeninformationen zu Cross-Origin-Inhalten freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` zu ermöglichen, Inhaltsgrößen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
