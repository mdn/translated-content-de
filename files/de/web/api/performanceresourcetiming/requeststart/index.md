---
title: "PerformanceResourceTiming: requestStart Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`requestStart`** schreibgeschützte Eigenschaft gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) der Zeit direkt bevor der Browser beginnt, die Ressource vom Server, Cache oder einer lokalen Ressource anzufordern, zurück. Wenn die Transportverbindung fehlschlägt und der Browser den Antrag erneut sendet, wird der Wert des Beginns des neuen Antrags zurückgegeben.

Es gibt keine _end_ Eigenschaft für `requestStart`. Um die Anforderungszeit zu messen, berechnen Sie [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) - `requestStart` (siehe das Beispiel unten).

## Wert

Die `requestStart` Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit direkt bevor der Browser beginnt, die Ressource vom Server anzufordern, darstellt.
- `0`, wenn die Ressource sofort aus einem Cache abgerufen wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anforderung ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.

## Beispiele

### Messung der Anforderungszeit

Die `requestStart` und [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) Eigenschaften können verwendet werden, um zu messen, wie lange die Anforderung dauert.

```js
const request = entry.responseStart - entry.requestStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource` Leistungseinträge informiert, die in der Leistungszeitachse des Browsers aufgezeichnet werden. Verwenden Sie die `buffered` Option, um auf Einträge vor der Erstellung des Beobachters zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource` Leistungseinträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitachse des Browsers vorhanden sind:

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

Wenn der Wert der `requestStart` Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anforderung sein. Um Cross-Origin-Timing-Informationen sichtbar zu machen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` das Ansehen von Timing-Ressourcen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
