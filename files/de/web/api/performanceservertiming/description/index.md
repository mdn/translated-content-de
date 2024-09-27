---
title: "PerformanceServerTiming: description Eigenschaft"
short-title: description
slug: Web/API/PerformanceServerTiming/description
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`description`** gibt einen Zeichenfolgenwert der vom Server angegebenen Metrikbeschreibung zurück oder einen leeren String.

## Wert

Eine Zeichenfolge.

## Beispiele

### Server-Timing-Einträge protokollieren

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}}-Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können sich auf `navigation` und `resource` Einträgen befinden.

Ein Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der neue `navigation` und `resource` Leistungs-Einträge benachrichtigt, sobald sie in der Leistungstimeline des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters vorhanden waren.

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

Ein Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation` und `resource` Leistungs-Einträge anzeigt, die in der Leistungstimeline des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

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
