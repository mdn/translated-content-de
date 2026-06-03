---
title: "PerformanceResourceTiming: finalResponseHeadersStart-Eigenschaft"
short-title: finalResponseHeadersStart
slug: Web/API/PerformanceResourceTiming/finalResponseHeadersStart
l10n:
  sourceCommit: a8249a8328d05a5b2f7fb3ec1d5df0f541bc8510
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die nur lesbare **`finalResponseHeadersStart`**-Eigenschaft gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der endgültigen Dokumentantwort (zum Beispiel {{httpstatus(200, "200 OK")}}) vom Server erhält, zurück.

Dies unterscheidet sich von **[`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart)** (was auch als **[`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart)** dargestellt werden kann), da dies bei den ersten Bytes einer beliebigen Antwort, einschließlich vorläufiger Antworten (zum Beispiel 103 Early Hints), beginnt, wobei die endgültige Antwort möglicherweise viel später kommt.

Wenn es keine vorläufigen Antworten gibt, ist `requestStart` dasselbe wie `finalResponseHeadersStart` und `firstInterimResponseStart` ist 0.

Es gibt keine _Ende_-Eigenschaft für `finalResponseHeadersStart`.

## Wert

Die `finalResponseHeadersStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die ersten Bytes der endgültigen Antwort vom Server erhält.
- `0` wenn die Ressource eine anforderungsübergreifende Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `finalResponseHeadersStart` und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) können verwendet werden, um zu messen, wie lange es dauert, bis der Browser beginnt, die endgültige Antwort nach dem Senden der Anfrage zu erhalten.

```js
const request = entry.finalResponseHeadersStart - entry.requestStart;
```

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu informieren, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.finalResponseHeadersStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: final response time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs der Methode in der Performance-Timeline des Browsers vorhanden sind.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.finalResponseHeadersStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: final response time: ${request}ms`);
  }
});
```

Das folgende Beispiel zeigt, wie man die Zeit zwischen den ersten und letzten Antwort-Headern misst.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const diff = entry.finalResponseHeadersStart - entry.responseStart;
    if ((entry.finalResponseHeadersStart > 0) & (diff > 0)) {
      console.log(
        `${entry.name}: time between first and final response start: ${diff}ms`,
      );
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

### Anforderungsübergreifende Zeitinformationen

Wenn der Wert der `finalResponseHeadersStart`-Eigenschaft `0` ist, könnte die Ressource eine anforderungsübergreifende Anfrage sein. Um die anforderungsübergreifenden Zeitinformationen einzusehen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` den Zugriff auf Zeit-Ressourcen zu ermöglichen, sollte die anforderungsübergreifende Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
- [`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart)
