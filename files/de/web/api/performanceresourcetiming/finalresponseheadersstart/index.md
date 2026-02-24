---
title: "PerformanceResourceTiming: finalResponseHeadersStart-Eigenschaft"
short-title: finalResponseHeadersStart
slug: Web/API/PerformanceResourceTiming/finalResponseHeadersStart
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`finalResponseHeadersStart`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) direkt nachdem der Browser das erste Byte der endgültigen Dokumentantwort (zum Beispiel 200 OK) vom Server empfangen hat, zurück.

Dies unterscheidet sich von **[`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart)** (was auch als **[`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart)** dargestellt werden kann), da dies ab den ersten Bytes einer beliebigen Antwort einschließlich Zwischenantworten (zum Beispiel 103 Early Hints) beginnt, wobei die endgültige Antwort möglicherweise viel später erfolgt.

Wenn es keine Zwischenantworten gibt, ist `requestStart` gleich `finalResponseHeadersStart` und `firstInterimResponseStart` ist 0.

Es gibt keine _end_ Eigenschaft für `finalResponseHeadersStart`.

## Wert

Die Eigenschaft `finalResponseHeadersStart` kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der endgültigen Antwort vom Server erhält.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `finalResponseHeadersStart` und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) können verwendet werden, um zu messen, wie lange es dauert, bis der Browser die endgültige Antwort empfängt, nachdem die Anfrage gesendet wurde.

```js
const request = entry.finalResponseHeadersStart - entry.requestStart;
```

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu benachrichtigen, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Die Option `buffered` wird verwendet, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

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

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die in der Performance-Zeitleiste des Browsers zum Zeitpunkt des Methodenaufrufs vorhanden sind.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.finalResponseHeadersStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: final response time: ${request}ms`);
  }
});
```

Das folgende Beispiel zeigt, wie die Zeit zwischen den ersten und den endgültigen Antwort-Headern gemessen wird.

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

### Timing-Informationen bei Cross-Origin

Wenn der Wert der `finalResponseHeadersStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Timing-Informationen für Cross-Origin sichtbar zu machen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt sein.

Ein Beispiel: Um `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, sollte die Cross-Origin-Ressource senden:

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
