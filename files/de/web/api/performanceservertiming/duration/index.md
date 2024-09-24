---
title: "PerformanceServerTiming: duration-Eigenschaft"
short-title: Dauer
slug: Web/API/PerformanceServerTiming/duration
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die **`duration`**-Eigenschaft ist schreibgeschützt und gibt einen Doppelwert zurück, der die vom Server angegebene Messdauer enthält, oder den Wert `0,0`.

## Wert

Eine Zahl.

## Beispiele

### Server-Timing-Einträge protokollieren

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}}-Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können sich auf `navigation`- und `resource`-Einträgen befinden.

Beispiel unter Verwendung eines {{domxref("PerformanceObserver")}}, der über neue `navigation`- und `resource`-Performance-Einträge informiert, sobald sie in der Leistungszeitachse des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers entstanden sind.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(
        `${serverEntry.name} (${serverEntry.description}) duration: ${serverEntry.duration}`,
      );
      // Protokolliert "cache (Cache Read) duration: 23.2"
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

Beispiel unter Verwendung von {{domxref("Performance.getEntriesByType()")}}, das nur `navigation`- und `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitachse des Browsers vorhanden sind:

```js
for (const entryType of ["navigation", "resource"]) {
  for (const { name: url, serverTiming } of performance.getEntriesByType(
    entryType,
  )) {
    if (serverTiming) {
      for (const { name, description, duration } of serverTiming) {
        console.log(`${name} (${description}) duration: ${duration}`);
        // Protokolliert "cache (Cache Read) duration: 23.2"
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

- {{domxref("PerformanceServerTiming")}}
- {{HTTPHeader("Server-Timing")}}
