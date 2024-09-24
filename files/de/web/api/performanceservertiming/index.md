---
title: PerformanceServerTiming
slug: Web/API/PerformanceServerTiming
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}} {{AvailableInWorkers}} {{securecontext_header}}

Die **`PerformanceServerTiming`**-Schnittstelle stellt Serverkennzahlen bereit, die mit der Antwort im {{HTTPHeader("Server-Timing")}} HTTP-Header gesendet werden.

Diese Schnittstelle ist auf den gleichen Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}} Header verwenden, um die Domänen anzugeben, die Zugriff auf die Serverkennzahlen haben dürfen. Beachten Sie, dass diese Schnittstelle in einigen Browsern nur in sicheren Kontexten (HTTPS) verfügbar ist.

## Instanzeigenschaften

- {{domxref('PerformanceServerTiming.description')}} {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert der vom Server angegebenen Metrikbeschreibung oder eine leere Zeichenfolge.
- {{domxref('PerformanceServerTiming.duration')}} {{ReadOnlyInline}}
  - : Ein Doppelwert, der die vom Server angegebene Metrikdauer enthält, oder der Wert `0.0`.
- {{domxref('PerformanceServerTiming.name')}} {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert des vom Server angegebenen Metriknamens.

## Instanzmethoden

- {{domxref('PerformanceServerTiming.toJSON()')}}
  - : Gibt eine JSON-Darstellung des `PerformanceServerTiming`-Objekts zurück.

## Beispiel

Angenommen, ein Server sendet den {{HTTPHeader("Server-Timing")}} Header, zum Beispiel ein Node.js-Server wie dieser:

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

Die `PerformanceServerTiming`-Einträge sind jetzt über JavaScript über die {{domxref("PerformanceResourceTiming.serverTiming")}}-Eigenschaft sichtbar und befinden sich in `navigation` und `resource` Einträgen.

Ein Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `navigation` und `resource` Leistungseinträge informiert, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `navigation` und `resource` Leistungseinträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

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
- {{domxref("PerformanceResourceTiming.serverTiming")}}
