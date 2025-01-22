---
title: "PerformanceResourceTiming: firstInterimResponseStart-Eigenschaft"
short-title: firstInterimResponseStart
slug: Web/API/PerformanceResourceTiming/firstInterimResponseStart
l10n:
  sourceCommit: db12ba7455d1897dc1ff5f5c1dbe36f6e2720805
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`firstInterimResponseStart`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der vorläufigen 1xx-Antwort (zum Beispiel 100 Continue oder 103 Early Hints) vom Server erhält, zurück.

Es gibt keine _end_-Eigenschaft für `firstInterimResponseStart`.

## Wert

Die Eigenschaft `firstInterimResponseStart` kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die ersten vorläufigen Bytes der Antwort vom Server erhält.
- `0`, wenn die Ressource keine vorläufige Antwort gesendet hat.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.

> [!NOTE]
> Da Early Hints typischerweise nur bei der Hauptnavigation unterstützt werden, die definitionsgemäß gleich-origin ist, zeigt ein Wert von `0` typischerweise an, dass Early Hints **nicht** verwendet wurden.

Ein nicht-null-`firstInterimResponseStart` zeigt an, dass es denselben Wert haben sollte wie [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) bei [unterstützenden Browsern](#browser-kompatibilität).

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `firstInterimResponseStart` und `requestStart` können verwendet werden, um zu messen, wie lange es dauert, bis der Browser eine vorläufige Antwort nach dem Senden der Anfrage erhält.

```js
const request = entry.firstInterimResponseStart - entry.requestStart;
```

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um über neue `resource`-Performance-Einträge zu benachrichtigen, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.firstInterimResponseStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: Interim response time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die sich zum Zeitpunkt des Aufrufs der Methode in der Performance-Zeitleiste des Browsers befinden.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.firstInterimResponseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Interim response time: ${request}ms`);
  }
});
```

### Timing-Informationen für Cross-Origin-Anfragen

Wenn der Wert der Eigenschaft `firstInterimResponseStart` `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um das Anzeigen von Timing-Informationen für Cross-Origin-Anfragen zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, sollte die Cross-Origin-Resource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
- [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart)
