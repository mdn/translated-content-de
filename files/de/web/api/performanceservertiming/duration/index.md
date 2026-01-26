---
title: "PerformanceServerTiming: duration-Eigenschaft"
short-title: duration
slug: Web/API/PerformanceServerTiming/duration
l10n:
  sourceCommit: d643cc96621950ced0be6343b1acd775580c62ad
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`duration`** gibt einen double-Wert zurück, der die vom Server angegebene Metrikdauer enthält (normalerweise in Millisekunden), oder den Wert `0.0`.

## Wert

Eine Zahl.

## Beispiele

### Protokollierung von Server-Timing-Einträgen

Server-Timing-Metriken erfordern, dass der Server den Header {{HTTPHeader("Server-Timing")}} sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können bei `navigation` und `resource`-Einträgen vorhanden sein.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der benachrichtigt, wenn neue `navigation` und `resource` Performance-Einträge in der Performance-Zeitachse des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(
        `${serverEntry.name} (${serverEntry.description}) duration: ${serverEntry.duration}`,
      );
      // Logs "cache (Cache Read) duration: 23.2"
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation` und `resource` Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

```js
for (const entryType of ["navigation", "resource"]) {
  for (const { name: url, serverTiming } of performance.getEntriesByType(
    entryType,
  )) {
    if (serverTiming) {
      for (const { name, description, duration } of serverTiming) {
        console.log(`${name} (${description}) duration: ${duration}`);
        // Logs "cache (Cache Read) duration: 23.2"
      }
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
- {{HTTPHeader("Server-Timing")}}
