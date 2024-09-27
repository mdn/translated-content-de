---
title: Server Timing
slug: Web/API/Performance_API/Server_timing
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{DefaultAPISidebar("Performance API")}}

Server-Timing ist ein Teil der Performance API und ermöglicht es Servern, Metriken über den Anforderungs-Antwort-Zyklus an den Benutzeragenten zu übermitteln. Sie können diese Informationen sammeln und auf serverseitige Metriken in derselben Weise reagieren wie auf alle anderen Metriken, die mit der Performance API verarbeitet werden.

## Senden von Servermetriken

Der {{HTTPHeader("Server-Timing")}} HTTP-Header wird verwendet, um Backend-Server-Timing-Metriken zu veröffentlichen. Zum Beispiel könnten Sie Lese-/Schreibzeiten der Datenbank, CPU-Zeit und Dateisystemzugriffe senden wollen.

Sie können Metriken mit oder ohne Werte senden. Die Metriken können optional eine Beschreibung enthalten. Es wird empfohlen, Namen, Beschreibungen und Daten so kurz wie möglich zu halten, um den HTTP-Overhead zu minimieren.

Beispiele für `Server-Timing`-Header:

```http
// Single metric without value
Server-Timing: missedCache

// Single metric with value
Server-Timing: cpu;dur=2.4

// Single metric with description and value
Server-Timing: cache;desc="Cache Read";dur=23.2

// Two metrics with values
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing as trailer
Trailer: Server-Timing
--- response body ---
Server-Timing: total;dur=123.4
```

Um echte serverseitige Metriken zu berechnen, konsultieren Sie die Dokumentation Ihres serverseitigen CMS, Frameworks oder Ihrer Programmiersprache, um zu erfahren, wie die Leistung innerhalb der Backend-Anwendung gemessen wird. Wenn Ihr Server Node.js verwendet, werden Ihnen die Performance Measurement APIs sehr vertraut vorkommen, da das Node.js Performance-Modul ein Teilmengensatz der W3C Web Performance APIs sowie zusätzliche APIs für Node.js-spezifische Leistungsmessungen ist. Weitere Informationen finden Sie in der [Node.js Performance-Dokumentation](https://nodejs.org/api/perf_hooks.html#performance-measurement-apis).

Beachten Sie, dass es keine Uhrensynchronisation zwischen dem Server, dem Client und etwaigen Zwischensystemen gibt. Das bedeutet, dass wenn Ihr Server Zeitstempel oder eine `startTime` sendet, der Wert möglicherweise nicht sinnvoll der [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Client-Zeitleiste zugeordnet werden kann.

Sobald Sie Ihre gewünschten Metriken berechnet haben, muss der Server den `Server-Timing`-Header in seiner Antwort senden. Siehe die {{HTTPHeader("Server-Timing")}} Referenzseite für ein Beispiel, wie man den Header in Node.js sendet.

## Abrufen von Servermetriken

Die Server-Timing-Metriken erscheinen normalerweise in den Entwicklerwerkzeugen des Browsers, sie werden jedoch auch als [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Performance-Einträge gespeichert, auf die Sie wie auf andere [Leistungsdaten](/de/docs/Web/API/Performance_API/Performance_data) zugreifen können. Allerdings gibt es keine eigenen `"server-timing"`-Einträge. Die `PerformanceServerTiming`-Objekte sind von `"navigation"` und `"resource"` Performance-Einträgen beobachtbar. Sie greifen auf die Servermetriken über die [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming)-Eigenschaft zu, die ein Array von `PerformanceServerTiming`-Objekten ist.

Gegeben ein {{HTTPHeader("Server-Timing")}} wie dieser:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2,db;dur=53,app;dur=47.2
```

Ein `PerformanceObserver` kann die Einträge auf der Clientseite mit folgendem Code protokollieren:

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

## Datenschutz- und Sicherheitsüberlegungen

Der `Server-Timing`-Header kann potenziell sensible Anwendungs- und Infrastrukturinformationen preisgeben. Daher müssen Sie kontrollieren, wann die Metriken zurückgegeben werden und an wen auf der Serverseite. Zum Beispiel könnten Sie Metriken nur authentifizierten Benutzern anzeigen und der Öffentlichkeit nichts.

Die `PerformanceServerTiming`-Schnittstelle ist auf denselben Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}}-Header verwenden, um die Domänen anzugeben, die auf die Servermetriken zugreifen dürfen. Beachten Sie auch, dass diese Schnittstelle nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar ist.
