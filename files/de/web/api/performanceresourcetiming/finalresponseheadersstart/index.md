---
title: "PerformanceResourceTiming: finalResponseHeadersStart-Eigenschaft"
short-title: finalResponseHeadersStart
slug: Web/API/PerformanceResourceTiming/finalResponseHeadersStart
l10n:
  sourceCommit: db12ba7455d1897dc1ff5f5c1dbe36f6e2720805
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die nur lesbare Eigenschaft **`finalResponseHeadersStart`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der endgültigen Dokumentantwort (zum Beispiel 200 OK) vom Server erhält, zurück.

Dies unterscheidet sich von **`[`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart)`** (welches auch als **`[`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart)`** dargestellt werden kann), da es mit den ersten Bytes jeder Antwort beginnt, einschließlich vorläufiger Antworten (zum Beispiel 103 Early Hints), wobei die endgültige Antwort möglicherweise viel später erfolgt.

Wenn es keine vorläufigen Antworten gibt, ist `requestStart` dasselbe wie `finalResponseHeadersStart` und `firstInterimResponseStart` ist 0.

Es gibt keine _Ende_-Eigenschaft für `finalResponseHeadersStart`.

## Wert

Die `finalResponseHeadersStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die ersten Bytes der endgültigen Antwort vom Server erhält.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `finalResponseHeadersStart` und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) können verwendet werden, um zu messen, wie lange es dauert, bis der Browser beginnt, die endgültige Antwort nach dem Senden der Anfrage zu empfangen.

```js
const request = entry.finalResponseHeadersStart - entry.requestStart;
```

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu benachrichtigen, sobald sie in der Leistungszeitleiste des Browsers erfasst werden. Die `buffered`-Option wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), welches nur `resource`-Performance-Einträge zeigt, die in der Leistungszeitleiste des Browsers zum Zeitpunkt des Aufrufs der Methode vorhanden sind.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.finalResponseHeadersStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: final response time: ${request}ms`);
  }
});
```

Das folgende Beispiel zeigt, wie man die Zeit zwischen den ersten und letzten Antwortheadern misst.

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

### Timing-Informationen über Cross-Origin-Anfragen

Wenn der Wert der Eigenschaft `finalResponseHeadersStart` `0` ist, könnte es sich um eine Cross-Origin-Anfrage handeln. Um Timing-Informationen über Cross-Origin-Ressourcen zu erhalten, muss der {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwort-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` das Anzeigen von Timing-Ressourcen zu erlauben, sollte die Cross-Origin-Ressource senden:

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
