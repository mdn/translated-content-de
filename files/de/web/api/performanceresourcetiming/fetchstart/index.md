---
title: "PerformanceResourceTiming: fetchStart-Eigenschaft"
short-title: fetchStart
slug: Web/API/PerformanceResourceTiming/fetchStart
l10n:
  sourceCommit: 153369fa094f0b58ce1aee3f3cc1a3d7ab540b91
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`fetchStart`** repräsentiert einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen.

Wenn es keine HTTP-Weiterleitungen gibt oder deren Timing-Informationen nicht verfügbar gemacht werden, entspricht dieser Wert [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime). Andernfalls kann dieser Wert später als `startTime` liegen.

Im Gegensatz zu vielen anderen `PerformanceResourceTiming`-Eigenschaften ist die Eigenschaft `fetchStart` für Cross-Origin-Anfragen verfügbar, ohne dass der HTTP-Antwort-Header {{HTTPHeader("Timing-Allow-Origin")}} erforderlich ist.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen.

## Beispiele

### Zeit zum Abrufen messen (ohne Weiterleitungen)

Die Eigenschaften `fetchStart` und [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) können verwendet werden, um die Gesamtzeit zu messen, die zum Abrufen der endgültigen Ressource benötigt wurde (ohne Weiterleitungen). Wenn Sie Weiterleitungen einschließen möchten, wird die Gesamtzeit zum Abrufen in der Eigenschaft [`duration`](/de/docs/Web/API/PerformanceEntry/duration) bereitgestellt.

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald diese in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

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
