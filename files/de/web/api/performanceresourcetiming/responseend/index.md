---
title: "PerformanceResourceTiming: responseEnd-Eigenschaft"
short-title: responseEnd
slug: Web/API/PerformanceResourceTiming/responseEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`responseEnd`** nur-lesbare Eigenschaft gibt einen {{domxref("DOMHighResTimeStamp", "Zeitstempel")}} unmittelbar nach dem Empfang des letzten Bytes der Ressource durch den Browser oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

Im Gegensatz zu vielen anderen `PerformanceResourceTiming`-Eigenschaften ist die `responseEnd`-Eigenschaft für Anfragen über verschiedene Ursprünge hinweg verfügbar, ohne dass der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader erforderlich ist.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar nach dem Empfang des letzten Bytes der Ressource durch den Browser oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

## Beispiele

### Zeit zum Abrufen messen (ohne Umleitungen)

Die Eigenschaften `responseEnd` und {{domxref("PerformanceResourceTiming.fetchStart", "fetchStart")}} können verwendet werden, um die Gesamtzeit zu messen, die zum Abrufen der endgültigen Ressource benötigt wurde (ohne Umleitungen). Wenn Sie Umleitungen einschließen möchten, wird die Gesamtzeit zum Abrufen in der {{domxref("PerformanceEntry.duration", "duration")}}-Eigenschaft angegeben.

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Beispiel mit einem {{domxref("PerformanceObserver")}}, der neue `resource` Leistungs-Einträge benachrichtigt, sobald sie in der Leistungschronik des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource` Leistungs-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungschronik des Browsers vorhanden sind:

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
