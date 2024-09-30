---
title: "PerformanceServerTiming: name-Eigenschaft"
short-title: name
slug: Web/API/PerformanceServerTiming/name
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die **`name`** schreibgeschützte Eigenschaft gibt einen
Zeichenfolgenwert des vom Server angegebenen Metriknamens zurück.

## Wert

Eine Zeichenfolge.

## Beispiele

### Protokollierung von Server-Timing-Einträgen

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}}-Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können in `navigation`- und `resource`-Einträgen vorkommen.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`- und `resource`-Leistungseinträge informiert, die im Leistungszeitstrahl des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`- und `resource`-Leistungseinträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode im Leistungszeitstrahl des Browsers vorhanden sind:

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
