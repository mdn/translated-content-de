---
title: "PerformanceServerTiming: description-Eigenschaft"
short-title: Beschreibung
slug: Web/API/PerformanceServerTiming/description
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`description`**-Eigenschaft gibt einen
Zeichenkettenwert der serverseitig angegebenen Metrikbeschreibung zurück oder eine leere
Zeichenkette.

## Wert

Eine Zeichenkette.

## Beispiele

### Protokollierung von Server-Timing-Einträgen

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}}-Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können sich auf `navigation`- und `resource`-Einträgen befinden.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `navigation`- und `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `navigation`- und `resource`-Performance-Einträge anzeigt, die zu dem Zeitpunkt, an dem Sie diese Methode aufrufen, in der Performance-Timeline des Browsers vorhanden sind:

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
