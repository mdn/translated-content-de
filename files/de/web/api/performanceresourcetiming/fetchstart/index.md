---
title: "PerformanceResourceTiming: fetchStart-Eigenschaft"
short-title: fetchStart
slug: Web/API/PerformanceResourceTiming/fetchStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`fetchStart`**-Eigenschaft (schreibgeschützt) stellt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) dar, der unmittelbar vor dem Zeitpunkt liegt, zu dem der Browser mit dem Abrufen der Ressource beginnt.

Bei HTTP-Redirects liefert die Eigenschaft den Zeitpunkt unmittelbar vor dem, an dem der User-Agent beginnt, die endgültige Ressource im Umleitungsprozess abzurufen.

Im Gegensatz zu vielen anderen Eigenschaften von `PerformanceResourceTiming` ist die `fetchStart`-Eigenschaft für Cross-Origin-Anfragen verfügbar, ohne dass der {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwortheader erforderlich ist.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen.

## Beispiele

### Messung der Zeit zum Abrufen (ohne Umleitungen)

Die `fetchStart`- und [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd)-Eigenschaften können verwendet werden, um die Gesamtzeit zu messen, die zum Abrufen der endgültigen Ressource benötigt wurde (ohne Umleitungen). Wenn Sie Umleitungen einbeziehen möchten, wird die Gesamtzeit für das Abrufen in der [`duration`](/de/docs/Web/API/PerformanceEntry/duration)-Eigenschaft bereitgestellt.

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue Leistungs-Einträge von `resource` benachrichtigt, sobald sie in der Leistungszeitleiste des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur Leistungs-Einträge von `resource` zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitleiste des Browsers vorhanden sind:

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
