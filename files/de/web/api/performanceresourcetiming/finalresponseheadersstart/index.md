---
title: "PerformanceResourceTiming: finalResponseHeadersStart-Eigenschaft"
short-title: finalResponseHeadersStart
slug: Web/API/PerformanceResourceTiming/finalResponseHeadersStart
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`finalResponseHeadersStart`** gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, unmittelbar nachdem der Browser das erste Byte der endgültigen Dokumentantwort (zum Beispiel 200 OK) vom Server erhalten hat.

Dies unterscheidet sich von **[`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart)** (was auch als **[`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart)** dargestellt werden kann), denn hier beginnt es mit den ersten Bytes jeder Antwort, einschließlich Zwischenantworten (zum Beispiel 103 Early Hints), wobei die endgültige Antwort möglicherweise viel später kommt.

Wenn es keine Zwischenantworten gibt, ist `requestStart` gleich `finalResponseHeadersStart` und `firstInterimResponseStart` ist 0.

Für `finalResponseHeadersStart` gibt es keine _Ende_-Eigenschaft.

## Wert

Die `finalResponseHeadersStart`-Eigenschaft kann folgende Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), unmittelbar nachdem der Browser die ersten Bytes der endgültigen Antwort vom Server erhalten hat.
- `0`, falls die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Anforderungszeit messen

Die Eigenschaften `finalResponseHeadersStart` und [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) können verwendet werden, um zu messen, wie lange es dauert, bis der Browser beginnt, die endgültige Antwort nach dem Senden der Anfrage zu empfangen.

```js
const request = entry.finalResponseHeadersStart - entry.requestStart;
```

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Leistungseinträge zu informieren, sobald sie in der Leistungszeitleiste des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge aus der Zeit vor der Erstellung des Observers zuzugreifen.

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

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Leistungseinträge zeigt, die zum Zeitpunkt des Aufrufs der Methode in der Leistungszeitleiste des Browsers vorhanden sind.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.finalResponseHeadersStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: final response time: ${request}ms`);
  }
});
```

Das folgende Beispiel zeigt, wie man die Zeit zwischen den ersten und endgültigen Antwort-Headern misst.

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

### Cross-Origin-Timing-Informationen

Wenn der Wert der `finalResponseHeadersStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Cross-Origin-Timing-Informationen anzeigen zu können, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, sollte die Cross-Origin-Ressource senden:

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
