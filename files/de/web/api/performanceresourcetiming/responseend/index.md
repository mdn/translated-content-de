---
title: "PerformanceResourceTiming: responseEnd-Eigenschaft"
short-title: responseEnd
slug: Web/API/PerformanceResourceTiming/responseEnd
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`responseEnd`** schreibgeschützte Eigenschaft gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) direkt nach dem Empfang des letzten Bytes der Ressource durch den Browser zurück oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

Im Gegensatz zu vielen anderen `PerformanceResourceTiming`-Eigenschaften ist die `responseEnd`-Eigenschaft für Cross-Origin-Anfragen verfügbar, ohne dass der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header benötigt wird.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) direkt nach dem Empfang des letzten Bytes der Ressource durch den Browser oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

## Beispiele

### Messung der Zeit zum Abrufen (ohne Umleitungen)

Die Eigenschaften `responseEnd` und [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) können verwendet werden, um die Gesamtzeit zu messen, die zum Abrufen der endgültigen Ressource benötigt wurde (ohne Umleitungen). Wenn Sie Umleitungen einbeziehen möchten, wird die Gesamtzeit zum Abrufen in der [`duration`](/de/docs/Web/API/PerformanceEntry/duration)-Eigenschaft bereitgestellt.

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge informiert, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const timeToFetch = entry.responseEnd - entry.fetchStart;
    if (timeToFetch > 0) {
      console.log(`${entry.name}: Time to fetch: ${timeToFetch}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die in der Performance-Zeitleiste des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const timeToFetch = entry.responseEnd - entry.fetchStart;
  if (timeToFetch > 0) {
    console.log(`${entry.name}: Time to fetch: ${timeToFetch}ms`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
