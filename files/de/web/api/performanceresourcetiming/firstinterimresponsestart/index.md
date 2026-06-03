---
title: "PerformanceResourceTiming: firstInterimResponseStart-Eigenschaft"
short-title: firstInterimResponseStart
slug: Web/API/PerformanceResourceTiming/firstInterimResponseStart
l10n:
  sourceCommit: a8249a8328d05a5b2f7fb3ec1d5df0f541bc8510
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`firstInterimResponseStart`** gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, unmittelbar nachdem der Browser das erste Byte der vorläufigen 1xx-Antwort (zum Beispiel {{httpstatus(100, "100 Continue")}} oder {{httpstatus(103, "103 Early Hints")}}) vom Server erhält.

Es gibt keine _end_-Eigenschaft für `firstInterimResponseStart`.

## Wert

Die Eigenschaft `firstInterimResponseStart` kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die ersten vorläufigen Bytes der Antwort vom Server erhält.
- `0`, wenn die Ressource keine vorläufige Antwort gesendet hat.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header nicht verwendet wird.

> [!NOTE]
> Da Early Hints typischerweise nur bei der Hauptnavigationsanfrage unterstützt werden, die per Definition gleichen Ursprungs ist, zeigt ein `0` typischerweise an, dass Early Hints **nicht** verwendet wurden.

Wenn `firstInterimResponseStart` ungleich null ist, bedeutet das, dass es denselben Wert wie [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) für [unterstützende Browser](#browser-kompatibilität) haben sollte.

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `firstInterimResponseStart` und `requestStart` können verwendet werden, um zu messen, wie lange es dauert, bis der Browser eine vorläufige Antwort nach dem Senden der Anfrage erhält.

```js
const request = entry.firstInterimResponseStart - entry.requestStart;
```

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu informieren, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Die Option `buffered` wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zur Zeit des Aufrufs der Methode in der Performance-Zeitleiste des Browsers vorhanden sind.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.firstInterimResponseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Interim response time: ${request}ms`);
  }
});
```

### Cross-Origin-Timing-Informationen

Wenn der Wert der Eigenschaft `firstInterimResponseStart` `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um die Anzeige von Cross-Origin-Timing-Informationen zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Um zum Beispiel `https://developer.mozilla.org` die Anzeige von Timing-Ressourcen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

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
