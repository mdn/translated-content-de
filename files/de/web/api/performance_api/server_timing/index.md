---
title: Server Timing
slug: Web/API/Performance_API/Server_timing
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{DefaultAPISidebar("Performance API")}}

Server-Timing ist ein Teil der Performance API und ermöglicht es Servern, Metriken über den Anforderungs-Antwort-Zyklus an den Nutzeragenten zu übermitteln. Sie können diese Informationen sammeln und auf serverseitige Metriken genauso reagieren wie auf alle anderen Metriken, die mit der Performance API verarbeitet werden.

## Senden von Servermetriken

Der {{HTTPHeader("Server-Timing")}} HTTP-Header wird verwendet, um Backend-Server-Zeitmetriken anzuzeigen. Beispielsweise möchten Sie möglicherweise Zeiten von Datenbank-Lese- und Schreiboperationen, CPU-Zeit und Dateisystemzugriff senden.

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

Um reale serverseitige Metriken zu berechnen, konsultieren Sie die Dokumentation Ihres serverseitigen CMS, Frameworks oder Ihrer Programmiersprache, um zu erfahren, wie Sie die Leistung innerhalb der Backend-Anwendung messen können. Wenn Ihr Server Node.js verwendet, werden Ihnen die Leistungs-Mess-APIs sehr vertraut vorkommen, da das Node.js-Leistungsmodul ein Teilmengensatz der W3C Web Performance APIs sowie zusätzliche APIs für Node.js-spezifische Leistungs-Messungen ist. Weitere Informationen finden Sie in der [Node.js-Leistungsdokumentation](https://nodejs.org/api/perf_hooks.html#performance-measurement-apis).

Beachten Sie, dass es keine Uhren-Synchronisation zwischen dem Server, dem Client und etwaigen Zwischenproxies gibt. Das bedeutet, dass, wenn Ihr Server Zeitstempel oder eine `startTime` sendet, der Wert möglicherweise nicht sinnvoll zur [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Client-Zeitleiste passt.

Sobald Sie Ihre gewünschten Metriken berechnet haben, muss der Server den `Server-Timing`-Header in seiner Antwort senden. Siehe die {{HTTPHeader("Server-Timing")}} Referenzseite für ein Beispiel, wie der Header in Node.js gesendet wird.

## Abrufen von Servermetriken

Die Server-Timing-Metriken erscheinen normalerweise in den Entwicklerwerkzeugen des Browsers, werden aber auch als [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Performance-Einträge gespeichert, auf die Sie wie auf andere [Performancedaten](/de/docs/Web/API/Performance_API/Performance_data) zugreifen können. Allerdings gibt es keine `"server-timing"` Einträge allein. Die `PerformanceServerTiming` Objekte sind in den `"navigation"` und `"resource"` Performance-Einträgen beobachtbar. Sie greifen auf die Servermetriken über die [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) Eigenschaft zu, welche ein Array von `PerformanceServerTiming` Objekten ist.

Gegeben ein {{HTTPHeader("Server-Timing")}} wie dieses:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2,db;dur=53,app;dur=47.2
```

Ein `PerformanceObserver` kann die Einträge clientseitig mit dem folgenden Code protokollieren:

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

Der `Server-Timing`-Header kann potenziell sensible Informationen über Anwendungen und Infrastruktur preisgeben. Daher müssen Sie steuern, wann die Metriken zurückgegeben werden und an wen auf der Serverseite. Beispielsweise könnten Sie Metriken nur authentifizierten Benutzern anzeigen und der Öffentlichkeit nichts.

Das `PerformanceServerTiming`-Interface ist auf denselben Ursprung beschränkt, aber Sie können den {{HTTPHeader("Timing-Allow-Origin")}} Header verwenden, um die Domänen anzugeben, die auf die Servermetriken zugreifen dürfen. Beachten Sie auch, dass dieses Interface nur in sicheren Kontexten (HTTPS) in einigen Browsern verfügbar ist.
