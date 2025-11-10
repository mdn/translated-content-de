---
title: "PerformanceResourceTiming: requestStart-Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
l10n:
  sourceCommit: d960038e3480d158d3b58294a4d150202331a83d
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`requestStart`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) der Zeit unmittelbar bevor der Browser beginnt, die Ressource vom Server, Cache oder einer lokalen Quelle anzufordern, zurück. Wenn die Transportverbindung fehlschlägt und der Browser die Anfrage erneut versucht, wird der Wert des neuen Anfragebeginns zurückgegeben.

Es gibt keine _Ende_-Eigenschaft für `requestStart`. Um die Anforderungszeit zu messen, berechnen Sie [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) - `requestStart` (siehe das untenstehende Beispiel).

## Wert

Die `requestStart`-Eigenschaft kann folgende Werte haben:

- Einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der Browser beginnt, die Ressource vom Server anzufordern, darstellt.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine cross-origin Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.
- `0`, wenn die Anfrage storniert wurde.

Wenn der [`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) ungleich null ist, bedeutet das, dass er denselben Wert wie `requestStart` für [unterstützende Browser](#browser-kompatibilität) haben sollte.

Wenn es keine Zwischenantworten gibt, ist `requestStart` derselbe wie `finalResponseHeadersStart` und `firstInterimResponseStart` ist 0.

## Beispiele

### Messen der Anforderungszeit

Die Eigenschaften `requestStart` und [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) können verwendet werden, um zu messen, wie lange die Anforderung dauert.

```js
const request = entry.responseStart - entry.requestStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der bei neuen `resource`-Leistungseinträgen benachrichtigt, während sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Leistungseinträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.responseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Request time: ${request}ms`);
  }
});
```

### Cross-origin Timing-Informationen

Wenn der Wert der `requestStart`-Eigenschaft `0` ist, könnte die Ressource eine cross-origin Anfrage sein. Um das Anzeigen von Cross-origin Timing-Informationen zu erlauben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` das Einsehen von Timing-Ressourcen zu erlauben, sollte die Cross-origin Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
