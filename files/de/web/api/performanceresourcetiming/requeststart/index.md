---
title: "PerformanceResourceTiming: requestStart-Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
l10n:
  sourceCommit: 5340aace9b48dc6f885fca3a90d03e7637cd0cb0
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`requestStart`**-Eigenschaft gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) der Zeit unmittelbar bevor der Browser beginnt, die Ressource vom Server, Cache oder lokalen Ressource anzufordern, zurück. Wenn die Transportverbindung fehlschlägt und der Browser die Anfrage erneut versucht, ist der zurückgegebene Wert der Beginn der erneuten Anfrage.

Es gibt keine _end_ Eigenschaft für `requestStart`. Um die Anforderungszeit zu messen, berechnen Sie [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) - `requestStart` (siehe das Beispiel unten).

## Wert

Die `requestStart`-Eigenschaft kann folgende Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der Browser beginnt, die Ressource vom Server anzufordern, darstellt.
- `0`, wenn die Ressource unmittelbar aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.
- `0`, wenn die Ressource eine stornierte Anfrage ist.

Wenn [`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) ungleich null ist, bedeutet dies, dass dieser Wert derselbe wie `requestStart` für [unterstützte Browser](#browser-kompatibilität) sein sollte.

Wenn es keine Zwischenantworten gibt, ist `requestStart` identisch mit `finalResponseHeadersStart` und `firstInterimResponseStart` ist 0.

## Beispiele

### Messung der Anforderungszeit

Die Eigenschaften `requestStart` und [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) können verwendet werden, um zu messen, wie lange die Anforderung dauert.

```js
const request = entry.responseStart - entry.requestStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, während sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.responseStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: Request time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource` Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.responseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Request time: ${request}ms`);
  }
});
```

### Cross-Origin-Timing-Informationen

Wenn der Wert der `requestStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um die Anzeige von Cross-Origin-Timing-Informationen zu ermöglichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt sein.

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
