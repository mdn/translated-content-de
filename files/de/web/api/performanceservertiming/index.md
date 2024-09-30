---
title: PerformanceServerTiming
slug: Web/API/PerformanceServerTiming
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}} {{AvailableInWorkers}} {{securecontext_header}}

Das **`PerformanceServerTiming`** Interface stellt Servermetriken bereit, die mit der Antwort im {{HTTPHeader("Server-Timing")}} HTTP-Header gesendet werden.

Dieses Interface ist auf denselben Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}} Header verwenden, um die Domains anzugeben, die auf die Servermetriken zugreifen dürfen. Beachten Sie, dass dieses Interface nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar ist.

## Instanzen-Eigenschaften

- [`PerformanceServerTiming.description`](/de/docs/Web/API/PerformanceServerTiming/description) {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert der vom Server angegebenen Metrikbeschreibung, oder eine leere Zeichenfolge.
- [`PerformanceServerTiming.duration`](/de/docs/Web/API/PerformanceServerTiming/duration) {{ReadOnlyInline}}
  - : Ein Double, das die vom Server angegebene Metrikdauer enthält, oder der Wert `0.0`.
- [`PerformanceServerTiming.name`](/de/docs/Web/API/PerformanceServerTiming/name) {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert des vom Server angegebenen Metriknamens.

## Instanzen-Methoden

- [`PerformanceServerTiming.toJSON()`](/de/docs/Web/API/PerformanceServerTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceServerTiming` Objekts zurück.

## Beispiel

Angenommen, ein Server sendet den {{HTTPHeader("Server-Timing")}} Header, zum Beispiel ein Node.js Server wie dieser:

```js
const http = require("http");

function requestHandler(request, response) {
  const headers = {
    "Server-Timing": `
      cache;desc="Cache Read";dur=23.2,
      db;dur=53,
      app;dur=47.2
    `.replace(/\n/g, ""),
  };
  response.writeHead(200, headers);
  response.write("");
  return setTimeout(() => {
    response.end();
  }, 1000);
}

http.createServer(requestHandler).listen(3000).on("error", console.error);
```

Die `PerformanceServerTiming` Einträge sind nun von JavaScript aus über die [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) Eigenschaft beobachtbar und existieren auf `navigation` und `resource` Einträgen.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der von neuen `navigation` und `resource` Performance-Eintrags benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(
        `${serverEntry.name} (${serverEntry.description}) duration: ${serverEntry.duration}`,
      );
      // Logs "cache (Cache Read) duration: 23.2"
      // Logs "db () duration: 53"
      // Logs "app () duration: 47.2"
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation` und `resource` Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
for (const entryType of ["navigation", "resource"]) {
  for (const { name: url, serverTiming } of performance.getEntriesByType(
    entryType,
  )) {
    if (serverTiming) {
      for (const { name, description, duration } of serverTiming) {
        console.log(`${name} (${description}) duration: ${duration}`);
        // Logs "cache (Cache Read) duration: 23.2"
        // Logs "db () duration: 53"
        // Logs "app () duration: 47.2"
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

- {{HTTPHeader("Server-Timing")}}
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming)
