---
title: "PerformanceResourceTiming: responseEnd-Eigenschaft"
short-title: responseEnd
slug: Web/API/PerformanceResourceTiming/responseEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`responseEnd`**-Eigenschaft ist eine nur-lesbare Eigenschaft, die einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurückgibt, unmittelbar nachdem der Browser das letzte Byte der Ressource empfangen hat oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

Im Gegensatz zu vielen anderen `PerformanceResourceTiming`-Eigenschaften ist die `responseEnd`-Eigenschaft für Cross-Origin-Anfragen ohne das {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verfügbar.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte
Byte der Ressource empfangen hat oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem,
was zuerst eintritt.

## Beispiele

### Zeitmessung zum Abrufen (ohne Umleitungen)

Die Eigenschaften `responseEnd` und [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) können verwendet werden, um die gesamte Zeit zu messen, die benötigt wurde, um die endgültige Ressource abzurufen (ohne Umleitungen). Wenn Sie Umleitungen einschließen möchten, wird die gesamte Abrufzeit in der [`duration`](/de/docs/Web/API/PerformanceEntry/duration)-Eigenschaft angegeben.

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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
