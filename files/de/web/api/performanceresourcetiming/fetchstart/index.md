---
title: "PerformanceResourceTiming: fetchStart-Eigenschaft"
short-title: fetchStart
slug: Web/API/PerformanceResourceTiming/fetchStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`fetchStart`** repräsentiert einen [`Timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen.

Falls es HTTP-Weiterleitungen gibt, gibt die Eigenschaft die Zeit unmittelbar bevor der User-Agent beginnt, die endgültige Ressource in der Weiterleitung abzurufen, zurück.

Im Gegensatz zu vielen anderen `PerformanceResourceTiming`-Eigenschaften ist die `fetchStart`-Eigenschaft für Cross-Origin-Anfragen verfügbar, ohne dass der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header erforderlich ist.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen.

## Beispiele

### Zeitmessung für das Abrufen (ohne Weiterleitungen)

Die `fetchStart`- und [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd)-Eigenschaften können verwendet werden, um die Gesamtzeit, die benötigt wurde, um die endgültige Ressource abzurufen (ohne Weiterleitungen), zu messen. Wenn Sie Weiterleitungen einschließen möchten, wird die Gesamtzeit zum Abrufen in der [`duration`](/de/docs/Web/API/PerformanceEntry/duration)-Eigenschaft angegeben.

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Leistungseinträge benachrichtigt, wenn sie in der Leistungszeitachse des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Beobachters zuzugreifen.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), die nur `resource`-Leistungseinträge anzeigen, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitachse des Browsers vorhanden sind:

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
