---
title: "PerformanceResourceTiming: fetchStart-Eigenschaft"
short-title: fetchStart
slug: Web/API/PerformanceResourceTiming/fetchStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`fetchStart`** schreibgeschützte Eigenschaft stellt einen {{domxref("DOMHighResTimeStamp","Zeitstempel")}} unmittelbar bevor der Browser beginnt, die Ressource abzurufen, dar.

Bei HTTP-Weiterleitungen gibt die Eigenschaft die Zeit unmittelbar bevor der Benutzeragent beginnt, die endgültige Ressource in der Weiterleitung abzurufen, zurück.

Im Gegensatz zu vielen anderen `PerformanceResourceTiming`-Eigenschaften ist die `fetchStart`-Eigenschaft für Cross-Origin-Anfragen verfügbar, ohne dass der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header erforderlich ist.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar bevor der Browser beginnt, die Ressource abzurufen.

## Beispiele

### Zeitmessung beim Abrufen (ohne Weiterleitungen)

Die Eigenschaften `fetchStart` und {{domxref("PerformanceResourceTiming.responseEnd", "responseEnd")}} können verwendet werden, um die Gesamtzeit zu messen, die benötigt wurde, um die endgültige Ressource (ohne Weiterleitungen) abzurufen. Wenn Sie Weiterleitungen einbeziehen möchten, wird die Gesamtzeit zum Abrufen in der {{domxref("PerformanceEntry.duration", "duration")}}-Eigenschaft angegeben.

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Performance-Einträge benachrichtigt, während sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Beobachters zuzugreifen.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge anzeigt, die in der Performance-Zeitleiste des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

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
