---
title: PerformanceServerTiming
slug: Web/API/PerformanceServerTiming
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{securecontext_header}}

Die **`PerformanceServerTiming`**-Schnittstelle stellt Servermetriken bereit, die mit der Antwort im HTTP-Header {{HTTPHeader("Server-Timing")}} gesendet werden.

Der Zugriff auf diese Schnittstelle ist auf denselben Ursprung beschränkt. Mit dem Header {{HTTPHeader("Timing-Allow-Origin")}} können Sie jedoch festlegen, welche Domains auf die Servermetriken zugreifen dürfen. Beachten Sie, dass diese Schnittstelle in einigen Browsern nur in sicheren Kontexten (HTTPS) verfügbar ist.

## Instanzeigenschaften

- [`PerformanceServerTiming.description`](/de/docs/Web/API/PerformanceServerTiming/description) {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert mit der vom Server angegebenen Beschreibung der Metrik oder eine leere Zeichenfolge.
- [`PerformanceServerTiming.duration`](/de/docs/Web/API/PerformanceServerTiming/duration) {{ReadOnlyInline}}
  - : Eine Gleitkommazahl vom Typ `double` mit der vom Server angegebenen Dauer der Metrik oder dem Wert `0.0`.
- [`PerformanceServerTiming.name`](/de/docs/Web/API/PerformanceServerTiming/name) {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert mit dem vom Server angegebenen Namen der Metrik.

## Instanzmethoden

- [`PerformanceServerTiming.toJSON()`](/de/docs/Web/API/PerformanceServerTiming/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceServerTiming`-Objekt repräsentiert. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beispiel

Angenommen, ein Server sendet den Header {{HTTPHeader("Server-Timing")}}, beispielsweise ein Node.js-Server wie dieser:

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

Die `PerformanceServerTiming`-Einträge sind nun über die Eigenschaft [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) in JavaScript zugänglich und gehören zu `navigation`- und `resource`-Einträgen.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`- und `resource`-Performance-Einträge informiert, sobald sie in der Performance-Timeline des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers erfasst wurden.

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

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType). Diese Methode zeigt nur die `navigation`- und `resource`-Performance-Einträge an, die zum Zeitpunkt des Aufrufs in der Performance-Timeline des Browsers vorhanden sind:

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
