---
title: "PerformanceResourceTiming: fetchStart-Eigenschaft"
short-title: fetchStart
slug: Web/API/PerformanceResourceTiming/fetchStart
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`fetchStart`** stellt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) dar, der unmittelbar bevor der Browser beginnt, die Ressource abzurufen, gesetzt wird.

Wenn es HTTP-Weiterleitungen gibt, gibt die Eigenschaft die Zeit unmittelbar bevor der Benutzeragent beginnt, die endgültige Ressource in der Weiterleitung abzurufen, zurück.

Im Gegensatz zu vielen anderen `PerformanceResourceTiming`-Eigenschaften ist die `fetchStart`-Eigenschaft für Cross-Origin-Anfragen ohne das {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verfügbar.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der unmittelbar bevor der Browser beginnt, die Ressource abzurufen, gesetzt wird.

## Beispiele

### Messung der Abrufzeit (ohne Weiterleitungen)

Die Eigenschaften `fetchStart` und [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) können verwendet werden, um die Gesamtzeit zu messen, die zum Abrufen der endgültigen Ressource (ohne Weiterleitungen) benötigt wurde. Wenn Sie Weiterleitungen einbeziehen möchten, wird die Gesamtzeit zum Abrufen in der Eigenschaft [`duration`](/de/docs/Web/API/PerformanceEntry/duration) bereitgestellt.

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters vorhanden waren.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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
