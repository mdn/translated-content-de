---
title: "PerformanceServerTiming: duration-Eigenschaft"
short-title: duration
slug: Web/API/PerformanceServerTiming/duration
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die **`duration`** Schreibgeschützte Eigenschaft gibt eine Zahl zurück, die die vom Server angegebene Metrikdauer enthält, oder den Wert `0.0`.

## Wert

Eine Zahl.

## Beispiele

### Protokollierung von Server-Timing-Einträgen

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}} Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming` Einträge können bei `navigation` und `resource` Einträgen vorhanden sein.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), welcher über neue `navigation` und `resource` Leistungs-Einträge informiert, sobald sie in der Leistungs-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered` Option, um Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), welches nur `navigation` und `resource` Leistungs-Einträge anzeigt, die in der Leistungs-Zeitleiste des Browsers zum Zeitpunkt des Aufrufs dieser Methode vorhanden sind:

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
