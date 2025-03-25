---
title: "PerformanceResourceTiming: requestStart-Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die nur-lesbare **`requestStart`**-Eigenschaft gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) der Zeit unmittelbar bevor der Browser die Ressource vom Server, Cache oder lokalen Ressource anfordert, zurück. Wenn die Transportverbindung fehlschlägt und der Browser die Anforderung erneut tätigt, wird der Wert des Beginns der erneuten Anforderung zurückgegeben.

Es gibt keine _end_-Eigenschaft für `requestStart`. Um die Anforderungszeit zu messen, berechnen Sie [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) - `requestStart` (siehe das Beispiel unten).

## Wert

Die `requestStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der Browser die Ressource vom Server anfordert, repräsentiert.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anforderung ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

Wenn die [`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) ungleich null ist, zeigt das an, dass sie denselben Wert wie `requestStart` für [unterstützende Browser](#browser-kompatibilität) haben sollte.

Wenn es keine Zwischenantworten gibt, ist `requestStart` dasselbe wie `finalResponseHeadersStart` und `firstInterimResponseStart` ist 0.

## Beispiele

### Messung der Anforderungszeit

Die `requestStart`- und [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart)-Eigenschaften können verwendet werden, um zu messen, wie lange die Anforderung dauert.

```js
const request = entry.responseStart - entry.requestStart;
```

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der bei neuen `resource`-Performance-Einträgen benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const request = entry.responseStart - entry.requestStart;
  if (request > 0) {
    console.log(`${entry.name}: Request time: ${request}ms`);
  }
});
```

### Cross-Origin-Zeitinformationen

Wenn der Wert der `requestStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anforderung sein. Um Cross-Origin-Zeitinformationen zu sehen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Beispielsweise, um `https://developer.mozilla.org` den Zugriff auf Zeitdaten zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
