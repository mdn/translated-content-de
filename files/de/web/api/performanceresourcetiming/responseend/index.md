---
title: "PerformanceResourceTiming: responseEnd-Eigenschaft"
short-title: responseEnd
slug: Web/API/PerformanceResourceTiming/responseEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`responseEnd`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte einer Ressource empfangen hat oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem was zuerst eintritt.

Im Gegensatz zu vielen anderen `PerformanceResourceTiming`-Eigenschaften ist die `responseEnd`-Eigenschaft auch für Cross-Origin-Anfragen verfügbar, ohne dass der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader benötigt wird.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte der Ressource empfangen hat oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem was zuerst eintritt.

## Beispiele

### Ermittlung der Zeit für den Abruf (ohne Umleitungen)

Die Eigenschaften `responseEnd` und [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) können verwendet werden, um die Gesamtzeit zu messen, die zum Abrufen der endgültigen Ressource benötigt wurde (ohne Umleitungen). Wenn Sie Umleitungen einbeziehen möchten, wird die Gesamtzeit zum Abrufen in der [`duration`](/de/docs/Web/API/PerformanceEntry/duration)-Eigenschaft angegeben.

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters vorhanden waren.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

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
